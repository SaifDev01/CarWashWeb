const { kMaxLength } = require("buffer")
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    phoneNumber : { 
        type : Number , 
        required : [true , "Enter Your Phone Number"] ,
        unique : true
},

    phoneOTP : String,
    isVerified : {
        type : Boolean, 
        default: false
    },
    status : {
        type: Boolean,
        default: true
    },
    role : {
        type: String,
        default : "user"
    }
}, { timestamps: true })    
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id :this._id }, process.env.JWT_SECRET )      
}





module.exports = mongoose.model("User", userSchema)




