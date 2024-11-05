import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const app = express();
const port = 5000;
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World from Express');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
