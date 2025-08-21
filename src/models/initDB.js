const pool = require('../config/database');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function initDatabase() {
  try {
    await pool.query(createTableQuery);
    console.log('✅ Tabla "tasks" creada/existe correctamente');
  } catch (error) {
    console.error('❌ Error creando tabla:', error);
  }
}

module.exports = initDatabase;