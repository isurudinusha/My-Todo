const Todo = require('../models/TodoModel');
const mongoose = require('mongoose');

module.exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports.createTodo = async (req, res) => {
    try {
        const todo = req.body;
        const newTodo = new Todo(todo);
        await newTodo.save();
        res.status(201).send(newTodo);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No todo with that id');
        const todoID = { _id: id };
        const update = { completed: true };
        const updateTodo = await Todo.findByIdAndUpdate(todoID, update);
        res.status(200).send(updateTodo);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No todo with that id');
        await Todo.findByIdAndDelete(id);
        res.status(200).send('Todo deleted successfully');
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};




