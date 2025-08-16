const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// TODO: Add MongoDB connection logic here

app.get('/', (req, res) => {
  res.send('VBlaze Backend is running!');
});

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/members', require('./routes/members'));


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});