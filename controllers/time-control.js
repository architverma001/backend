const Time = require('../models/time-shema.js');
const moment = require('moment');
const authMiddleware = require('./middleware.js');

const getTime = async (req, res) => {
  try {
    const currentTime = moment();
    console.log('Current Time:', currentTime.toISOString());

    const { type } = req.user; // Assuming you have the user type stored in the 'userType' property of the 'user' object in the request

    let query = { time: { $gte: currentTime.toDate() } };
    if (type === true) {
      // If userType is true, show booked slots
      query.booked = true;
      query.email  = req.user.email;
    } else {
      // If userType is false, show free slots
      query.booked = false;
    }

    const freeNotExpiredSlots = await Time.find(query);

    console.log('Free Not Expired Slots:', freeNotExpiredSlots);

    res.json(freeNotExpiredSlots);
  } catch (error) {
    console.error('Error fetching free and not expired slots:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getTime;
