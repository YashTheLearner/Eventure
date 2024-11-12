import Comment from '../models/comment.model.js';
import Event from '../models/event.model.js';

// Controller to add a comment to an event
export const addComment = async (req, res) => {
    const { eventId } = req.params;
    const { text } = req.body;

    try {
        // Check if event exists
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Create a new comment
        const newComment = new Comment({
            text,
            createdBy: req.user.id,
            eventId: eventId
        });

        const savedComment = await newComment.save();

        res.status(201).json({
            message: 'Comment added successfully',
            comment: savedComment
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get all comments for a specific event
export const getCommentsByEvent = async (req, res) => {
    const { eventId } = req.params;

    try {
        // Fetch all comments for the event, populating the createdBy field to show user details
        const comments = await Comment.find({ eventId: eventId }).populate('createdBy', 'name email');

        res.status(200).json({
            message: 'Comments fetched successfully',
            comments: comments
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
