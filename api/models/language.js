import mongoose from 'mongoose';

const languageSchema = mongoose.Schema({
  name: { type: String, required: true },
  dialect: { type: String },
  years: { type: Number, required: true, default: 0 },
  experience: { type: Number, required: true, default: 0 },
});

const Language = mongoose.model('Language', languageSchema);
export { Language, languageSchema };