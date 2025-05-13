import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);

export default app;