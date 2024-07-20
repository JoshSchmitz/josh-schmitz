import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: String,
  skills: [{ type: mongoose.Schema.Types.ObjectId }],
  highlighted: { type: Boolean, required: true },
});

export default projectSchema;
