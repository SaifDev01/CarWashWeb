const ErrorHandler = require("../utils/errorHandler")
const cathAsyncError = require("../middleWare/asyncErrors")
const User  = require("../models/userModel")
const Merchant = require('../models/merchantModel')
const {generateOTP} = require('../utils/optGenerator')
require('dotenv')
const jwtToken = require('../utils/getJWToken') 
const { calculationByDistance } = require("../utils/calcDistance")
const client = require('twilio')('ACa54a0b8683d4f91fcab8c3c2a241d81c', '6cb9327ace844c33931b184a7d4b1a0f')


exports.registerUserWithPhone = cathAsyncError(async(req,res,next)=>{
    const {phoneNumber} = req.body
    let user = await User.findOne({phoneNumber})
    // console.log(exist);
    if(!user){
        user = await User.create({
            phoneNumber
        })
    }
    const otp = generateOTP(6)
    user.phoneOTP = otp
    user.save()
    client.messages.create({
        body: `Verify by entering this 6-digit OTP ${otp} `,
        to: '+'+phoneNumber,
        from:'+15074362485'
    })
    res.status(200).json({
        success : true,
        message: "OTP sent to the Phone Number"
    })
})




// exports.loginUser = cathAsyncError(async(req,res,next)=>{
//     const {email, password} = req.body
//     if(!email ||password){
//         return next(new ErrorHandler("Please Enter Username or Password" , 501))
//     }
//     const user = User.findOne({email}).select("+password")
// })

// exports.myFunc = cathAsyncError(async(req,res,next)=>{
//     const {email, password , confirmPass} = req.body
    
// })

exports.verifyOTP = cathAsyncError(async(req,res,next)=>{
        const { otp, userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
           return next(new ErrorHandler("User Doesn't Exist", 404));
        }
        if(user.phoneOTP !== otp) {
            return next(new ErrorHandler("Invalid OTP", 404)); 
        }
      
        user.phoneOTP = "";
        user.isVerified= true
        await user.save();

        jwtToken(user , 200, res)

        // res.status(201).json({
        //     success: "true",
        //     message: "OTP verified successfully",
        //     data: {
        //       userId: user._id,
        //     },
        // })
})

exports.suspendAccount = cathAsyncError(async (req,res,next)=>{
   const {status, userId} = req.body
   const user = await User.findById(userId)
   if(!user){
    return next(new ErrorHandler("User Doesn't Exists"))
   }
   user.status = status
   await user.save()
   res.status(201).json({
    success: "true",
    message: `User Status Change to ${status} successfully`, 
    })
})


exports.findMerchantNearMe = cathAsyncError(async (req,res,next)=>{
    const { long , lat } = req.body
    const merchants = await Merchant.find({
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [long, lat]
                },
                $maxDistance: 10000000000 // in meters
            }
        }
    })
    res.status(200).json({
        success : "true", 
        merchants   
    })
})


exports.findUser = cathAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler("User Doesn't Exists"))
       }
    res.status(200).json({
        user
    })
})

exports.deleteUser = cathAsyncError(async(req,res,next)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user){
        return next(new ErrorHandler("User Doesn't Exists"))
       }
    res.status(201).json({
        success: true,
        message : "User has been deleted successfully"
    })
})

exports.getAllUsers = cathAsyncError(async(req,res,next)=>{
    const users = await User.find()
    res.status(201).json({
        success: true,
        users
    })
})

exports.updateRole = cathAsyncError(async(req,res,next)=>{
    const {userId , role} = req.body
    const user = await User.findByIdAndUpdate(userId, {role} , {new : true} )
    if(!user){
        return next(new ErrorHandler("User Doesn't Exists"))
       }
    res.status(200).json({
        user
    })
})







