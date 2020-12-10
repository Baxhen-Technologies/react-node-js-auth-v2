const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')

// define our model

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  username: { type: String },
  authenticationToken: { type: String },
  authenticationTokenExpires: { type: Date },
  createdAt: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
})

// on save hook, encrypt password
// eslint-disable-next-line
userSchema.pre('save', function (next) {
  const user = this
  const salt = bcrypt.genSaltSync(10)
  // eslint-disable-next-line
  bcrypt.hash(user.password, salt, function (err, hash) {
    if (err) {
      return next(err)
    }

    user.password = hash
    next()
  })
})
// eslint-disable-next-line
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  // eslint-disable-next-line
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err)
    }
    callback(null, isMatch)
  })
}
// create model class

const ModelClass = mongoose.model('user', userSchema)

// export the model

module.exports = ModelClass
