const express = require('express');
const connectDB = require('./database/db');
const todoRoutes = require('./routes/TodoRoutes');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use('/api', todoRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
