// Importing the Todo model and mongoose
const Todo = require('../models/TodoModel');
const mongoose = require('mongoose');

// Function to get all todos
module.exports.getTodos = async (req, res) => {
    try {
        // Fetching all todos from the database and sorting them by creation date
        const todos = await Todo.find().sort({ createdAt: -1 });
        // Sending the todos as a response with status code 200
        res.status(200).json(todos);
    } catch (error) {
        // Sending an error message with status code 404 if something goes wrong
        res.status(404).json({ message: error.message });
    }
};

// Function to create a new todo
module.exports.createTodo = async (req, res) => {
    try {
        // Getting the todo data from the request body
        const todo = req.body;
        // Creating a new Todo instance with the provided data
        const newTodo = new Todo(todo);
        // Saving the new todo to the database
        await newTodo.save();
        // Sending the new todo as a response with status code 201
        res.status(201).send(newTodo);
    } catch (error) {
        // Sending an error message with status code 500 if something goes wrong
        res.status(500).send({ message: error.message });
    }
};

// Function to update a todo
module.exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const update = { completed: true };
    try {
        // Updating the todo with the provided id and sending the updated todo as a response
        const updateTodo = await Todo.findByIdAndUpdate(id, update);
        res.status(200).send(updateTodo);
    } catch (error) {
        // Sending an error message with status code 500 if something goes wrong
        res.status(500).send({ message: error.message });
    }
};

// Function to delete a todo
module.exports.deleteTodo = async (req, res) => {
    // Getting the id of the todo from the request parameters
    const { id } = req.params;
    try {
        // Checking if the provided id is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id))
            // If the id is not valid, send a 404 status code with a message
            return res.status(404).send('No todo with that id');

        // If the id is valid, find the todo by id and delete it
        await Todo.findByIdAndDelete(id);

        // Send a 200 status code with a success message
        res.status(200).send('Todo deleted successfully');
    } catch (error) {
        // Sending an error message with status code 500 if something goes wrong
        res.status(500).send({ message: error.message });
    }
};



