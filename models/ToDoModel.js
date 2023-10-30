const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  priority: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model('ToDO', TodoSchema);