const { kMaxLength } = require("buffer")
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userDetailSchema = new mongoose.Schema({
  
    name : {
        type : String,
        required : [true , "Please Enter Your Name"],
        maxLength : [30, "Name can not Exceed 30 Character"],
        minLength : [3 , "Name should have more than 3 character"]

    },  
    user_address : {
        type : String,
        required: [true , "Enter User Address"]

    },
    user_city : {
        type : String,
        required : [true, 'Enter City']

    },
    userId : {
        type : mongoose.Schema.ObjectId,
        ref: 'User'
    },
    resetPasswordToken : String,
    resetPasswordExpire : Date,
    

}, { timestamps: true })



module.exports = mongoose.model("UserDetail", userDetailSchema)




