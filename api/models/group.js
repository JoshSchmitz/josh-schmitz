import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: String, required: true },
  endDate: { type: String },
  position: [
    {
      title: { type: String, requred: true },
      startDate: { type: String, required: true },
      endDate: { type: String },
    },
  ],
  highlighted: { type: Boolean, required: true },
});

export default groupSchema;
