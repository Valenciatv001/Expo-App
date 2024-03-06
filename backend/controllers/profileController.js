const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    // The authenticated user's ID is available in req.user
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error('Error fetching user profile', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
