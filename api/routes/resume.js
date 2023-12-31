import express from 'express';
import {
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
router
  .route('/')
  .get(getResume)
  .post(protect, createResume)
  .put(protect, updateResume)
  .delete(protect, deleteResume);
router.use('/experience', experienceRoutes);

export default router;
