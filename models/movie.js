const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  releaseYear: Number,
  ratings: [
    {
      userId: mongoose.Types.ObjectId,
      value: Number,
    },
  ],
});

module.exports = mongoose.model('Movie', movieSchema);