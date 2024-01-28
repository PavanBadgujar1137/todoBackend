const mongoose = require("mongoose");

const todo = new mongoose.Schema({
  addTodo: {
    type: String,
    required: true,
    maxLength: 30,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo ", todo);
