import express from 'express';
import { createEvent, getAllEvents } from '../controllers/event.controller.js';
import requireAuth from '../middleware/requireAuth.js';
import { getEventById } from '../controllers/getEventById.controller.js';

const router = express.Router();

// Route to create a new event
router.post('/create',requireAuth , createEvent);


// Route to get all events
router.get('/all', getAllEvents );
router.get('/:id', getEventById);
router.get('/:id/register', requireAuth, async (req, res) => {
    console.log('Registering for event');
    try {
      const userId = req.user.id;  // Get the current user's ID (assuming you're using JWT authentication)
      const eventId = req.params.id; // Get the event ID from the route parameter
      
      // Fetch the event from the database
      const event = await Event.findById(eventId);
      
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      // Check if the event's capacity is exceeded
      if (event.registrations.length >= event.capacity) {
        return res.status(400).json({ message: "Event is at full capacity" });
      }
      
      // Check if the user is already registered for the event
      if (event.registrations.includes(userId)) {
        return res.status(400).json({ message: "You are already registered for this event" });
      }
      
      // Add the user's ID to the registrations array
      event.registrations.push(userId);
      await event.save();
      
      // Optionally, you can also add the user to the attendees array once they have registered
      event.attendees.push(userId);
      await event.save();
      
      res.status(200).json({ message: "Registration successful", event });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while registering for the event" });
    }
  });

export default router;
