import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const serverless = require('serverless-http')

dotenv.config();

connectDB();

const app = express(); // main thing

app.use(express.json()); // to accept json data

app.use("/.netifly/functions/api/users", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

module.exports.handler = serverless(app)