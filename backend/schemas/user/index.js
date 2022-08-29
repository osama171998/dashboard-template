const mongose = require("mongoose")

const UserSchema = new mongose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    cnic:{
        type:String,
        required:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    email:{
        type:Number,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    address:{
        type:Number,
        required:true
    }
});

module.exports = UserSchema;