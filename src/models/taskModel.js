const pool = require('../config/database');

// GET ALL TASKS
const getAllTasks = async () => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};

// GET TASK BY ID
const getTaskById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

// CREATE NEW TASK
const createTask = async (title) => {
  try {
    const result = await pool.query(
      'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
      [title]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

// UPDATE TASK
const updateTask = async (id, updates) => {
  try {
    const { title, completed } = updates;
    const result = await pool.query(
      'UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *',
      [title, completed, id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

// DELETE TASK
const deleteTask = async (id) => {
  try {
    const result = await pool.query(
      'DELETE FROM tasks WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};