import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import EmailRoute from "./routes/emailRoute.js";
import { connectDB } from "./db/db.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/portfolio", EmailRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
