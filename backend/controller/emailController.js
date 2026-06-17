import EmailModel from "../model/email.js";
import nodemailer from "nodemailer";
export const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, Email and Message are required",
      });
    }

    const emailData = new EmailModel({ name, email, message });
    await emailData.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      message: "Email sent successfully",
      emailData,
    });
  } catch (err) {
    console.error("Send Email Error --->", err);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getEmail = async (req, res) => {
  try {
    const emailData = await EmailModel.find();
    if (!emailData) {
      return res.status(404).json("Email Not Found");
    }

    res.status(201).json({ message: "Email Fetched Successfully" });
  } catch (err) {
    console.error("Email Fetched Error--->", err);
    res.status(500).json("Server Error");
  }
};
