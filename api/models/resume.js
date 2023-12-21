import mongoose from 'mongoose';

// import sub-models
import experienceSchema from './experience.js';

const resumeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    experience: [experienceSchema],
  },
  { timestamps: true }
);

const Resume = mongoose.model('Resume', resumeSchema);
export default Resume;
