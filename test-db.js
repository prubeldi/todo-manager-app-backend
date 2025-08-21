/*const pool = require('./src/config/database');

console.log('🔍 Probando conexión a PostgreSQL...');

pool.query('SELECT NOW() as current_time', (err, res) => {
  if (err) {
    console.error('❌ Error:', err.message);
  } else {
    console.log('✅ Conexión exitosa. Hora de la DB:', res.rows[0].current_time);
  }
  pool.end();
}); */