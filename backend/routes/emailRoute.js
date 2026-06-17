import express from "express";
import { sendEmail, getEmail } from "../controller/emailController.js";
const router = express.Router();
router.post("/send-email", sendEmail);
router.get("/", getEmail);
export default router;
