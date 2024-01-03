import express from 'express';
import {
  createExperience,
  getExperience,
  updateExperience,
  deleteExperience,
} from '../controllers/experience.js';
import { protect } from '../middleware/authenticate.js';

// instantiate router
const router = express.Router();

// routes
router.get('/:resumeId', getExperience);
router.get('/:resumeId/:experienceId', getExperience);
router
  .route('/')
  .post(protect, createExperience)
  .put(protect, updateExperience)
  .delete(protect, deleteExperience);

export default router;
