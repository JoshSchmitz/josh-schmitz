import express from 'express';
import {
  getResume,
  createResume,
  updateResume,
  deleteResume,
} from '../controllers/resume.js';
import { protect } from '../middleware/authenticate.js';
import experienceRoutes from './experience.js';
import educationRoutes from './education.js';
import skillRoutes from './skill.js';
import leadershipRoutes from './leadership.js';

// instantiate router
const router = express.Router();

// routes
router.route('/user/:userId').get(getResume).post(protect, createResume);
router
  .route('/:resumeId')
  .get(getResume)
  .put(protect, updateResume)
  .delete(protect, deleteResume);

// nest routes
router
  .use('/:resumeId/experience', experienceRoutes)
  .use('/:resumeId/education', educationRoutes)
  .use('/:resumeId/skill', skillRoutes)
  .use('/:resumeId/leadership', leadershipRoutes);

export default router;
