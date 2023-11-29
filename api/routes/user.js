import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
} from '../controllers/user.js';

// instantiate router
const router = express.Router();

// routes
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get().put(updateUserProfile);

export default router;
