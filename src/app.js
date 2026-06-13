import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

export default app;
