const express = require('express');
const router = express.Router();
const { getTasks, getTask, addTask, modifyTask, removeTask } = require('../controllers/tasksController');

// GET ALL TASKS
router.get('/', getTasks);

// GET TASK BY ID
router.get('/:id', getTask);

// CREATE NEW TASK
router.post('/', addTask);

// UPDATE TASK
router.put('/:id', modifyTask);

// DELETE TASK
router.delete('/:id', removeTask);

module.exports = router;