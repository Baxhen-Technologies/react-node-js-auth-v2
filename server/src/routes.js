const routes = require('express').Router()
const passport = require('passport')
const Authentication = require('./controllers/authentication')
require('./services/passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogIn = passport.authenticate('local', { session: false })

routes.get('/', requireAuth, (req, res) => {
  res.send({ message: 'this is a protected content', user: req.user })
})
routes.post('/login', requireLogIn, Authentication.signIn)
routes.post('/forgot_password', Authentication.forgotPassword)
routes.post('/signup', Authentication.signup)
routes.post('/reset_password', Authentication.resetPassword)
routes.post('/verify_email', Authentication.verifyEmail)

module.exports = routes
