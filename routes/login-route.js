const getLogin = require('../controllers/login-contol.js') ;
const User = require('../models/user-schema.js');
const express = require('express');
const routerLog = express.Router();
routerLog.post('/login',getLogin);
module.exports = routerLog;
