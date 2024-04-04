const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    savedAnimes: [{ type: Schema.Types.ObjectId, ref: 'Anime' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    reminders: [{
      anime: { type: Schema.Types.ObjectId, ref: 'Anime' },
      reminderDate: { type: Date, required: true },
      notified: { type: Boolean, default: false }
    }]
  },
  { timestamps: true }
)

UserSchema.methods.setPassword = function(password) {
  this.passwordHash = bcrypt.hashSync(password, 10)
}

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash)
}

UserSchema.methods.generateJWT = function() {
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      email: this.email
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  )
}

UserSchema.methods.toAuthJSON = function() {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    savedAnimes: this.savedAnimes,
    reviews: this.reviews,
    reminders: this.reminders
  }
}

module.exports = mongoose.model('User', UserSchema)