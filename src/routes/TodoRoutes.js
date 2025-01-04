const express = require('express');
//const todoController = require('../controllers/TodoController');
const { 
    createTodo, 
    getAllTodo, 
    getTodoById, 
    updateTodoStatus, 
    deleteTodo } = require ('../controllers/TodoController');
const router = express.Router();

router.post('/todos', createTodo);
router.get('/todos', getAllTodo);
router.get('/todos/:id', getTodoById);
router.put('/todos/:id', updateTodoStatus);
router.delete('/todos/:id', deleteTodo);

module.exports = router;