import express from 'express';
import { authUser, registerUser, logoutUser } from '../controllers/user.js';

// instantiate router
const router = express.Router();

// routes
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);

export default router;
