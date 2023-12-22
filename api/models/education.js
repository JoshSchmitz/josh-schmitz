import mongoose from 'mongoose';

const educationSchema = mongoose.Schema({
  degree: { type: String, required: true },
  major: [{ title: { type: String, required: true } }],
  majorCount: { type: Number, default: 0 },
  minor: [{ title: { type: String, required: true } }],
  minorCount: { type: Number, default: 0 },
  institution: {
    name: { type: String, required: true },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postcode: { type: Number, required: true },
    },
    phone: { type: Number },
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  gpa: { type: Number, default: 0 },
  highlighted: { type: Boolean, required: true },
});

const Education = mongoose.model('Education', educationSchema);
export { Education, educationSchema };
