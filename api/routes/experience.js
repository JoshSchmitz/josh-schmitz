import express from 'express';
import { createExperience } from '../controllers/experience.js';
import { protect } from '../middleware/authenticate.js';

// instantiate router
const router = express.Router();

// routes
router.route('/').post(protect, createExperience);

export default router;
