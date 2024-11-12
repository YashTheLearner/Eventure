import User from '../models/app.model.js';

export const getHostedEvents = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).populate('hostedEvents'); // Populate only hosted events

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ hostedEvents: user.hostedEvents });
  } catch (error) {
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
