import mongoose from 'mongoose';

const awardSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  icon: { type: String, required: true },
  highlighted: { type: Boolean, required: true },
});

const Award = mongoose.model('Award', awardSchema);
export { Award, awardSchema };
