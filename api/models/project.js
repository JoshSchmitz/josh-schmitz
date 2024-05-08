import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  skills: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
  highlighted: { type: Boolean, required: true },
});

export default projectSchema;
