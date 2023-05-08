const mongoose = require('mongoose');

const UserSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    is_online:{
        type:String,
        default:'0'
    },
},
{ timestamps:true }
);

module.exports = mongoose.model('User', UserSchema);