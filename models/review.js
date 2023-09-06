const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  text: String,
});


module.exports = mongoose.model('Review', reviewSchema)