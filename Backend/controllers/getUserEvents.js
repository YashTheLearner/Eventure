import e from 'express';
import User from '../models/app.model.js';
import Event from '../models/event.model.js';

export const getHostedEvents = async (req, res) => {
  const userId = req.params?.userId || req.user.id;

  try {
    // Query to find events where the 'createdBy' field matches the userId
    const events = await Event.find({ createdBy: userId })
      .populate('createdBy', 'name email') // Populate user info (optional)
      .exec(); // Execute the query

    // If no events are found, return 404 error
    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No hosted events found" });
    }

    // Return the hosted events in the response
    res.json({ hostedEvents: events });
  } catch (error) {
    console.log(error);
    // Return error if something goes wrong with the database query
    res.status(500).json({ message: "Error fetching hosted events", error });
  }
};

export const getAttendedEvents = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).populate('attendedEvents'); // Populate only attended events

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ attendedEvents: user.attendedEvents });
  } catch (error) {
    res.status(500).json({ message: "Error fetching attended events", error });
  }
};
