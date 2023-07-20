const User = require('../models/user-schema.js');
const { v4: uuidv4 } = require('uuid');

const getLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Please fill all the fields');
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send('User not found');
    }

    if (user.password === password) {
      // Generate a unique token for the user
      const token = uuidv4();
      user.token = token;
      await user.save();

      res.json({ token });
    } else {
      res.status(400).send('Invalid Credentials!');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = getLogin;
