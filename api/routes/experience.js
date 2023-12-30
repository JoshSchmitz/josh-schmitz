import express from 'express';
import {
  getExperiences,
  createExperience,
  getExperience,
  updateExperience,
  deleteExperience,
} from '../controllers/experience.js';
import { protect } from '../middleware/authenticate.js';

// instantiate router
const router = express.Router({ mergeParams: true });

// routes
router.route('/').get(getExperiences).post(protect, createExperience);
router
  .route('/:experienceId')
  .get(getExperience)
  .put(protect, updateExperience)
  .delete(protect, deleteExperience);

export default router;
