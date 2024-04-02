const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  airingDate: {
    type: Date,
    required: true
  },
  genres: [{
    type: String
  }],
  studio: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Anime', animeSchema)