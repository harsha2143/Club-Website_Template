import express from 'express';
import dotenv from 'dotenv';
import connectDB, { addData } from './utils/db.js';
import adminRoute from "./routes/admin.auth.js";
import cors from 'cors';
import joinusroutes from './routes/joinusroutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// CORS should be one of the first middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Body parsing middleware MUST come before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
try {
  connectDB();
} catch (error) {
  console.error("Database connection failed:", error);
}

// Routes - these should come AFTER middleware setup
app.get('/', (req, res) => {
  res.send('Hello, World!');    
});

app.use('/api/joinus', joinusroutes);
app.use(adminRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});