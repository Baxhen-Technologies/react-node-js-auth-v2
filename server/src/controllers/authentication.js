const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const User = require('../models/user')
const {
  companyName,
  secret,
  webUrl,
  facebookUrl,
  centralAjudaUrl,
} = require('../config/config')
const Mailer = require('../services/Mailer')

function tokenForUser(user) {
  const timestamp = new Date().getTime()
  return jwt.sign({ sub: user.id, iat: timestamp }, secret)
}

exports.signIn = (req, res) => {
  if (req.user.isVerified) {
    return res.send({ token: tokenForUser(req.user) })
  }
  return res
    .status(401)
    .send({ message: 'components.loginPage.accountActivationError' })
}
exports.forgotPassword = async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne({ email })

    if (!user)
      return res.status(400).send({
        message:
          'components.recoverPasswordPage.dialogErrorMessageNotRegistered',
      })

    const authenticationToken = crypto.randomBytes(20).toString('hex')

    const authenticationTokenExpires = new Date()
    authenticationTokenExpires.setHours(
      authenticationTokenExpires.getHours() + 1,
    )

    await User.findByIdAndUpdate(user.id, {
      $set: {
        authenticationToken,
        authenticationTokenExpires,
      },
    })

    const link = `${webUrl}/resetPassword/${authenticationToken}/${email}`
    const Email = new Mailer({
      local: {
        email,
        link,
        username: user.username,
        companyName,
        facebookUrl,
        centralAjudaUrl,
      },
      templateName: 'resetPassword',
    })

    return Email.sendEmail().then((err) => {
      if (err) {
        return res.status(400).send({
          message:
            'components.recoverPasswordPage.dialogErrorMessageCouldNotSendEmail',
        })
      }

      return res.send({
        message: 'components.recoverPasswordPage.dialogSuccessMessage',
      })
    })
  } catch (error) {
    return res.status(400).send({
      message: 'components.recoverPasswordPage.dialogErrorMessageInternalError',
    })
  }
}
exports.signup = (req, res, next) => {
  const { email, password, username } = req.body

  if (!email || !password || !username) {
    res
      .status(422)
      .send({ error: 'You must provide email, password and a username' })
  }
  // see if a user already exists
  User.findOne({ email }, async (err, existingUser) => {
    // if a user with email already exists return an error

    if (err) {
      return next(err)
    }

    if (existingUser) {
      return res
        .status(422)
        .send({ message: 'components.signUpPage.emailInUseError' })
    }
    // if a user does not exists create and save user record
    const user = new User({ email, password, username })

    try {
      await user.save()
      // get the email and send a link to verify the email
      // res.send({ token: tokenForUser(user) });
    } catch (error) {
      // eslint-disable-next-line
      console.log(error)
    }
    const authenticationToken = crypto.randomBytes(20).toString('hex')

    const authenticationTokenExpires = new Date()
    authenticationTokenExpires.setHours(
      authenticationTokenExpires.getHours() + 24,
    )

    try {
      await User.findByIdAndUpdate(user.id, {
        $set: {
          authenticationToken,
          authenticationTokenExpires,
        },
      })
    } catch (error) {
      // eslint-disable-next-line
      console.log(error)
    }
    const link = `${webUrl}/verifyEmail/${authenticationToken}/${email}`
    const Email = new Mailer({
      local: {
        email,
        link,
        username: user.username,
        companyName,
        facebookUrl,
        centralAjudaUrl,
      },
      templateName: 'verifyEmail',
    })

    return Email.sendEmail().then((e) => {
      if (e) {
        return res
          .status(400)
          .send({ message: 'could not send verify account email' })
      }

      return res.send({
        message: 'components.signUpPage.successMessage',
      })
    })
  })
}
exports.resetPassword = async (req, res) => {
  const { email, token, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(400).send({ message: 'User not found' })

    if (token !== user.authenticationToken)
      return res.status(400).send({
        message: 'components.resetPasswordPage.dialogErrorMessageInvalidToken',
      })

    const now = new Date()
    if (+now > +user.authenticationTokenExpires)
      return res.status(400).send({
        message: 'components.resetPasswordPage.dialogErrorMessageExpiredToken',
      })

    user.password = password
    user.authenticationToken = ''

    await user.save()

    return res.send({
      message: 'components.resetPasswordPage.dialogSuccessMessage',
    })
  } catch (error) {
    return res.status(400).send({ message: 'Cannot reset password, try again' })
  }
}

exports.verifyEmail = async (req, res) => {
  const { token, email } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(400).send({ message: 'User not found' })

    if (!user.authenticationToken)
      return res.status(400).send({
        message: 'components.verifyEmailPage.dialogErrorMessageAlreadyVerified',
      })

    if (token !== user.authenticationToken)
      return res.status(400).send({
        message: 'components.verifyEmailPage.dialogErrorMessageInvalidToken',
      })

    const now = new Date()
    if (+now > +user.authenticationTokenExpires)
      return res.status(400).send({
        message: 'components.verifyEmailPage.dialogErrorMessageExpiredToken',
      })

    await User.findByIdAndUpdate(user.id, {
      $set: {
        isVerified: true,
        authenticationToken: '',
      },
    })

    return res.send({
      message: 'components.verifyEmailPage.dialogSuccessMessage',
    })
  } catch (error) {
    return res.status(400).send({ message: 'Cannot verify email, try again' })
  }
}
