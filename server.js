const initDatabase = require('./src/models/initDB');
// ... después de require('dotenv').config();
initDatabase();

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Importar rutas
const tasksRoutes = require('./src/routes/tasks');

// Usar rutas
app.use('/api/tasks', tasksRoutes);


// Rutas básicas
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'API del Todo Manager funcionando!',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});