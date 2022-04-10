import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const serverless = require('serverless-http')

const app = express(); // main thing
 
dotenv.config();

connectDB();

app.use(express.json()); // to accept json data

app.use("/.netlify/functions/api", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

exports.handler = serverless(app)