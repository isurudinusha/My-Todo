// Importing the Router function from the express module
const { Router } = require('express');

// Importing the controller functions from the TodoController
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/TodoController');

// Creating a new router
const router = Router();

// Defining the GET route for '/todos' which will call the getTodos function
router.get('/todos', getTodos);

// Defining the POST route for '/save' which will call the createTodo function
router.post('/save', createTodo);

// Defining the PUT route for '/update/:id' which will call the updateTodo function
router.put('/update/:id', updateTodo);

// Defining the DELETE route for '/delete/:id' which will call the deleteTodo function
router.delete('/delete/:id', deleteTodo);

// Exporting the router to be used in other files
module.exports = router;