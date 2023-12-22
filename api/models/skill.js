import mongoose from 'mongoose';

const skillSchema = mongoose.Schema({
  title: { type: String, required: true },
  years: { type: Number, required: true, default: true },
  experience: { type: Number, required: true, default: true },
  icon: { type: String, required: true },
  category: { type: String, required: true },
  highlighted: { type: Boolean, required: true },
});

const Skill = mongoose.model('Skill', skillSchema);
export { Skill, skillSchema };
