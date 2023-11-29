import express from 'express';
import { authUser } from '../controllers/user.js';

// instantiate router
const router = express.Router();

// routes
router.post('/auth', authUser);

export default router;
