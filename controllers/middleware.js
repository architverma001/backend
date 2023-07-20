const User = require('../models/user-schema.js');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    if (!token.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
    }

    const actualToken = token.split(' ')[1];
    const user = await User.findOne({ token: actualToken });

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    req.user = user; // Attach the user object to the request for further use if needed
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = authMiddleware;
