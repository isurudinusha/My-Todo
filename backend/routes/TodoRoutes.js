const { Router } = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/TodoController');

const router = Router();

router.get('/todos', getTodos);
router.post('/save', createTodo);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;