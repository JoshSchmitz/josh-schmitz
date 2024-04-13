import mongoose from 'mongoose';

const accomplishmentSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  icon: { type: String, required: true },
  highlighted: { type: Boolean, required: true },
});

const Accomplishment = mongoose.model('Accomplishment', accomplishmentSchema);
export { Accomplishment, awardSchema };
