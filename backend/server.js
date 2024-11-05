import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// routes import
import categoryRoute from './routes/category.js';

const app = express();
const port = 5000;
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

// parse body
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// routes
app.get('/', (req, res) => {
  res.send('Hello World from Express');
});
app.use('/api/v1/category', categoryRoute);

// Listen to the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
