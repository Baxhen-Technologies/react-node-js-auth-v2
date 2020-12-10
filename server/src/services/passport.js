const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy
const config = require('../config/config')
const User = require('../models/user')

// Create local strategy

const localOptions = { usernameField: 'email' }

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise call done with false

  // eslint-disable-next-line
  User.findOne({ email }, (err, user) => {
    if (err) {
      return done(err)
    }
    if (!user) {
      return done(false)
    }
    // eslint-disable-next-line
    user.comparePassword(password, function (error, isMatch) {
      if (error) {
        return done(error)
      }

      if (!isMatch) {
        return done(null, false)
      }

      return done(null, user)
    })
  })
})

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
}
// Create JWT strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  // se if user id and payload exists in our database
  // if it does, call 'done' with that other
  // otherwise, call done without a user object
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false)
    }
    const thisUserExists = !!user

    return thisUserExists ? done(null, user) : done(null, false)
  })
})

// Tell passport to use this strategy

passport.use(jwtLogin)
passport.use(localLogin)
