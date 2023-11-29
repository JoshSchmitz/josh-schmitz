import express from 'express';
import { authUser, registerUser } from '../controllers/user.js';

// instantiate router
const router = express.Router();

// routes
router.post('/', registerUser);
router.post('/auth', authUser);

export default router;
