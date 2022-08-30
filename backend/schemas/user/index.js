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
        required:true,
        unique:true,
        dropDups:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

module.exports = UserSchema;