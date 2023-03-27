const ErrorHandler = require("../utils/errorHandler")
const cathAsyncError = require("../middleWare/asyncErrors")
const User  = require("../models/userModel")
const Branch = require('../models/branchModel')
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
    client.messages.create({
        body: `Verify by entering this 6-digit OTP ${otp} `,
        to: '+'+phoneNumber,
        from:'+15074362485'
    }).catch(()=>{
        return next(new ErrorHandler("Otp Can Not be Sent", 400))
    })
    user.phoneOTP = otp
    user.save()
    res.status(200).json({
        success : true,
        message: "OTP sent to the Phone Number",

    })
})

module.exports.logoutUser = cathAsyncError(async(req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: "Logged Out"
    });
});





exports.verifyOTP = cathAsyncError(async(req,res,next)=>{
        const { otp, userId } = req.body;
        const user = await User.findOne({phoneOTP : otp});
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










//Admin

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
    const { long , lat , km } = req.body
    const merchants = await Branch.find({
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [long, lat]
                },
                $maxDistance: km*1000 // in meters
            }
        }
    })
    console.log(merchants.length);
    if(!merchants.length >0){
        return next(new ErrorHandler("No Merchant Found Near You" , 404))
    }
    res.status(200).json({
        success : "true", 
        merchants   
    })
})


//Admin

exports.findUser = cathAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler("User Doesn't Exists"))
       }
    res.status(200).json({
        user
    })
})

//Admin
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

//Admin
exports.getAllUsers = cathAsyncError(async(req,res,next)=>{
    const users = await User.find()
    res.status(201).json({
        success: true,
        users
    })
})
//Admin
exports.updateRole = cathAsyncError(async(req,res,next)=>{
    const {userId , role} = req.body
    let user = await User.findById(userId)
    if(!user){
        return next(new ErrorHandler("User Doesn't Exists"))
       }
    await User.findByIdAndUpdate(userId, {role} , {new : true} ).catch(()=>{
        return next(new ErrorHandler("User Can not be updated"))
    })
    
    res.status(200).json({
        user
    })
})







