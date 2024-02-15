import mongoose from 'mongoose';

const skillSchema = mongoose.Schema({
  title: { type: String, required: true },
  years: { type: Number, required: true, default: true },
  experience: { type: Number, required: true, default: true },
  icon: String,
  category: { type: String, required: true },
  highlighted: { type: Boolean, required: true },
});

export default skillSchema;
