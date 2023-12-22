import mongoose from 'mongoose';

// import sub-models
import { awardSchema } from './award.js';
import { educationSchema } from './education.js';
import { experienceSchema } from './experience.js';
import { groupSchema } from './group.js';
import { languageSchema } from './language.js';
import { leadershipSchema } from './leadership.js';
import { projectSchema } from './project.js';
import { skillSchema } from './skill.js';

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
    award: [awardSchema],
    education: [educationSchema],
    experience: [experienceSchema],
    group: [groupSchema],
    language: [languageSchema],
    leadership: [leadershipSchema],
    project: [projectSchema],
    skill: [skillSchema],
  },
  { timestamps: true }
);

const Resume = mongoose.model('Resume', resumeSchema);
export default Resume;
