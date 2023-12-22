import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  position: [
    {
      title: { type: String, requred: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date },
    },
  ],
});

const Group = mongoose.model('Group', groupSchema);
export { Group, groupSchema };
