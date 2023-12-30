import express from 'express';
import { getExperiences, createExperience } from '../controllers/experience.js';
import { protect } from '../middleware/authenticate.js';

// instantiate router
const router = express.Router({ mergeParams: true });

// routes
router.route('/').get(getExperiences).post(protect, createExperience);

export default router;
