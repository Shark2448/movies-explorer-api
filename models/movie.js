const mongoose = require('mongoose');

const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validator: validator.isUrl,
    },
    trailerLink: {
      type: String,
      required: true,
      validator: validator.isUrl,
    },
    thumbnail: {
      type: String,
      required: true,
      validator: validator.isUrl,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    movieId: {
      type: Number,
      required: false,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('card', movieSchema);
