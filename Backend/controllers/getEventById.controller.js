// event.controller.js
import Event from '../models/event.model.js'; // Assuming this is the Event model

export const getEventById = async (req, res) => {
  try {
    const eventId = req.params.eventId; // Get eventID from the route parameter

    // Find the event by ID
    const event = await Event.findById(eventId); // You can add other methods like populate if needed

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Send the event object as a response
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event', error });
  }
};
