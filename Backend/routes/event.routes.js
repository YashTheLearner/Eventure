import express from 'express';
import { createEvent, getAllEvents } from '../controllers/event.controller.js';
import requireAuth from '../middleware/requireAuth.js';
import { getEventById } from '../controllers/getEventById.controller.js';

const router = express.Router();

// Route to create a new event
router.post('/create',requireAuth , createEvent);


// Route to get all events
router.get('/all', getAllEvents );
router.get('/:eventId', requireAuth, getEventById);

export default router;
