import mongoose from 'mongoose';

const leadershipSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  date: { type: Date, required: true },
  highlighted: { type: Boolean, required: true },
});

const Leadership = mongoose.model('Leadership', leadershipSchema);
export { Leadership, leadershipSchema };
