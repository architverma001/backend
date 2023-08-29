const mongoose = require('mongoose');
const timeSchema = new mongoose.Schema({
  time: {
    type: Date, // Use Date data type instead of String
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  booked: {
    type: Boolean,
    default: false,
  },
  name:{
    type:String,
    default:""

  },
  student:{
    type:String,
    default:""
  }

});

const time = mongoose.model('Time', timeSchema);
module.exports = time;
