const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const port = 4000;

// Middleware
app.use(cors()); 
app.use(express.json());

// MongoDB connection
async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://bloguser:trUDaQmqzVSf2tHW@cluster0.6jpmjr5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true
      }
    });
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit if DB connection fails
  }
}

connectDB();

// Routes
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const userDoc = await User.create({ username, password });
    res.status(201).json(userDoc);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});



// mongodb+srv://bloguser:WS05pPTJAT4tCMO9@cluster0.wtrrpiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongodb+srv://bloguser:trUDaQmqzVSf2tHW@cluster0.6jpmjr5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0