import mongoose from 'mongoose';

const experienceSchema = mongoose.Schema({
  position: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postcode: { type: Number, required: true },
    },
    phone: { type: Number, required: true },
  },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skills' }],
  highlighted: { type: Boolean, required: true },
});

export default experienceSchema;
