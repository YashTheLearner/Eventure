import Event from '../models/event.model.js';
import userModel from '../models/app.model.js';

// Controller to handle event creation


// Controller to handle fetching all events
export const getAllEvents = async (req, res) => {
    try {
        // Fetch all events from the database, populating the createdBy field to show user details
        const events = await Event.find().populate('createdBy', 'name email');

        res.status(200).json({
            message: "Events fetched successfully",
            events: events
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to handle event creation (already provided)
export const createEvent = async (req, res) => {
    const { title, description, date, location, Mode } = req.body;

    try {
        if (!title || !description || !date || !location || !Mode) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        const newEvent = new Event({
            title,
            description,
            date,
            location,
            Mode,
            createdBy: req.user.id
        });

        const savedEvent = await newEvent.save();

        res.status(201).json({
            message: "Event created successfully",
            event: savedEvent
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
