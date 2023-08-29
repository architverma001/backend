const Time = require('../models/time-shema.js');
const moment = require('moment');
const authMiddleware = require('./middleware.js');

const getTime = async (req, res) => {
  try {
    const currentTime = moment();
    console.log('Current Time:', currentTime.toISOString());

    const { type } = req.user;
    const { student, email } = req.body || {}; // Use const instead of var

    let query = { time: { $gte: currentTime.toDate() } };
    if (type === true) {
      // If userType is true, show booked slots
      query.booked = true;
      query.email = req.user.email;
      if (student) {
        query.student = student;
      }
    } else {
      // If userType is false, show free slots
      query.booked = false;
      if (email) {
        // Do something with email
        query.email = email;
      }
    }

    const freeNotExpiredSlots = await Time.find(query);
    res.json(freeNotExpiredSlots);
  } catch (error) {
    console.error('Error fetching free and not expired slots:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getTime;
