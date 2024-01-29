const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { addTodo } = req.body;

    // Validate if 'addTodo' is provided in the request body
    if (!addTodo) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "'addTodo' is required in the request body.",
      });
    }

    // Create a new todo
    const todo = await Todo.create({ addTodo });

    // Respond with success and the created todo
    res.status(201).json({
      success: true,
      data: todo,
      message: "TODO Created Successfully!",
    });
  } catch (error) {
    console.error("Error creating todo:", error);

    // Respond with an error and the error message
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Issue!",
    });
  }
};
