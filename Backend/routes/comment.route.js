import express from 'express';
import { addComment, getCommentsByEvent } from '../controllers/comment.controller.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

// Route to add a comment to a specific event
router.post('/:eventId', requireAuth, addComment);

// Route to get all comments for a specific event
router.get('/:eventId', getCommentsByEvent);

export default router;
