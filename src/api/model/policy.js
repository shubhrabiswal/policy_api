const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
  policy_number: {
    type: String,
    required: true,
    trim: true
  },
  policy_start_date: {
    type: String,
    required: true,
    trim: true
  },
  policy_end_date: {
    type: String,
    required: true,
    trim: true
  },
  policy_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LOB",
  },
  collection_id: {
    type: String,
    required: true,
    trim: true
  },
  company_collection_id: {
    type: String,
    required: true,
    trim: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
}, { timestamps: true });


module.exports = mongoose.model('Policy', PolicySchema);

// policy number, policy start date, policy end date, policy category, collection id,
// company collection id, and user id.