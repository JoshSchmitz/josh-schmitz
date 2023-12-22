import mongoose from 'mongoose';

const experienceSchema = mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  company: {
    name: { type: String, required: true },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postcode: { type: Number, required: true },
    },
    phone: { type: String, required: true },
  },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  skills: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
  hightlighted: { type: Boolean, required: true },
});

const Experience = mongoose.model('Experience', experienceSchema);
export { Experience, experienceSchema };
