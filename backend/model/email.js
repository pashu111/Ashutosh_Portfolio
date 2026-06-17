import mongoose from "mongoose";
const EmailSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
    required: true,
  },
});
const EmailModel = mongoose.model("Email", EmailSchema);
export default EmailModel;
