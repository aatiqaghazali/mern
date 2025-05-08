import mongoose from "mongoose";
const feedbackSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
});
export const Feedback= mongoose.model('feedback', feedbackSchema);