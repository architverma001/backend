const express = require('express');
const getTime = require('../controllers/time-control.js');
const authMiddleware = require('../controllers/middleware.js');
const routerT = express.Router();

routerT.get('/free_slots',authMiddleware, getTime); // Corrected the usage of getTime here

module.exports = routerT;
