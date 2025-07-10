require('dotenv').config();
const userRoutes = require('./routes/users');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());  // Parse JSON bodies
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});