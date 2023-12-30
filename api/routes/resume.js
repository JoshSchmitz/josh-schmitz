import express from 'express';
import {
  getResumes,
  getResume,
  createResume,
  updateResume,
  deleteResume,
} from '../controllers/resume.js';
import { protect } from '../middleware/authenticate.js';
import experienceRoutes from './experience.js';

// instantiate router
const router = express.Router();

// routes
router.route('/').get(getResumes).post(protect, createResume);
router
  .route('/:id')
  .get(getResume)
  .put(protect, updateResume)
  .delete(protect, deleteResume);
router.use('/:id/experience', experienceRoutes);

export default router;
