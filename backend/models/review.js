const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  anime: {
    type: Schema.Types.ObjectId,
    ref: 'Anime',
    required: true,
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('Review', reviewSchema)