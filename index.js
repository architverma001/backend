const express = require('express');
const getLogin = require( './controllers/login-contol.js');
const routerLog = require('./routes/login-route.js');
const routerT = require('./routes/time-slot.js');
const cors = require('cors');
const User = require('./models/user-schema.js');
const Time = require('./models/time-shema.js');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const moment = require('moment');
const authMiddleware = require('./controllers/middleware.js');
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://arpitverma2410:Sheela@cluster0.fznpnjk.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.log(err));
 // Assuming you have the 'time' model defined in the 'timeModel.js' file



  

app.use('/', routerLog);
app.use('/', routerT);



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
}
);

