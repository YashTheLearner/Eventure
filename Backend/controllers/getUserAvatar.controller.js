// user.controller.js
import User from '../models/app.model.js';  // Assuming this is your User model

export const getUserAvatar = async (req, res) => {
  try {
    const userId = req.user.id; // This comes from the `requireAuth` middleware

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user's avatar URL (assuming avatar is stored in a field `avatar` in the User model)
    res.status(200).json({
      avatar: user.avatar,
      username : user.username
        // Assuming `avatar` field contains the URL to the user's avatar
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user avatar', error });
  }
};
