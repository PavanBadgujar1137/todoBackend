const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { addTodo } = req.body;

    const todo = await Todo.create({ addTodo });

    res.status(200).json({
      success: true,
      data: todo,
      message: "TODO Created Successfully!!!!!", // Fixed typo: "meassage" to "message"
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message, // Fixed typo: "meassage" to "message"
      message: "Internal Server Issue!!!!!!!", // Moved the message property inside the JSON object
    });
  }
};
