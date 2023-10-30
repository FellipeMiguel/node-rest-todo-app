const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  priority: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model('ToDo', TodoSchema);