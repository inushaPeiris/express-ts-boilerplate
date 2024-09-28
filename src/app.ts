import express from 'express';
import dotenv from 'dotenv';

import errorHandler from './middlewares/errorHandler';
import userRouter from './routes/user';
import worldRouter from './routes/world';

// Create an Express application.
const app = express();

// Load environment variables.
dotenv.config();

// Middlewares.
app.use(express.json());

// Routes.
app.use('/users', userRouter);
app.use('/world', worldRouter);

// Global error handler middleware.
app.use(errorHandler);

export default app;
