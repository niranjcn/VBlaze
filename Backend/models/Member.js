const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  socials: {
    github: String,
    linkedin: String,
    twitter: String
  }
});

module.exports = mongoose.model('Member', MemberSchema);
