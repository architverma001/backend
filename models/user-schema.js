const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    type:{
        type:Boolean,
        required:true,

    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        default:null,
     
    }
})
const User = mongoose.model('User',userSchema);
module.exports = User;




