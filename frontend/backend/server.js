const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/students'); // ✅ make sure this exports a Router
require('dotenv').config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/students', studentRoutes);

// Default route (optional)
app.get('/', (req, res) => {
  res.send('Student Recording System Backend is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
