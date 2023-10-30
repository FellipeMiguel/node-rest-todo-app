const ToDoModel = require('../models/ToDoModel');

// read
module.exports.getToDo = async (req, res) => {
  const ToDo = await ToDoModel.find();
  res.send(ToDo);
};


// Create
module.exports.saveToDo = async (req, res) => {
  const { text, priority } = req.body;

  ToDoModel.create({ text, priority }).then((data) => {
    console.log('added successfully');
    console.log(data);
    res.send(data);
  })
};

// Update
module.exports.updateToDo = async (req, res) => {
  const { _id, text, priority } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text, priority }).then(() => {
    res.send('updated successfully');
  }).catch((err) => console.log(err));
};

// Delete
module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id).then(() => {
    res.send('deleted successfully');
  }).catch((err) => console.log(err));
};