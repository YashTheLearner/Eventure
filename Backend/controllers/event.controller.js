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
            events: events,
            success : true,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to handle event creation (already provided)
export const createEvent = async (req, res) => {
    const { eventTitle, shortDescription, detailedDescription, dateTime, location, pincode,capacity } = req.body;
    try {
        if (!eventTitle || !shortDescription || !detailedDescription || !dateTime || !pincode || !location||!capacity) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        const newEvent = new Event({
            eventTitle,
             shortDescription,
              detailedDescription,
               dateTime,
                location,
                pincode,
                capacity,
            createdBy: req.user.id
        });

        const savedEvent = await newEvent.save();
        console.log(savedEvent);
        

        res.status(201).json({
            message: "Event created successfully",
            event: savedEvent
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};