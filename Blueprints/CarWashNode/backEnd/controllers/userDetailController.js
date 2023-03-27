const ErrorHandler = require("../utils/errorHandler")
const cathAsyncError = require("../middleWare/asyncErrors")
const UserDetail  = require("../models/userDetailModel")
const User  = require("../models/userModel")
const Merchant = require('../models/merchantModel')
const {generateOTP} = require('../utils/optGenerator')
require('dotenv')
const jwtToken = require('../utils/getJWToken') 
const { calculationByDistance } = require("../utils/calcDistance")
const client = require('twilio')('ACa54a0b8683d4f91fcab8c3c2a241d81c', '6cb9327ace844c33931b184a7d4b1a0f')



exports.inputUserDetails = cathAsyncError(async(req,res,next)=>{
    const { name , user_address,user_city } = req.body

    const user = await UserDetail.findOne({userId: req.user.id})
    if(user){
        return next(new ErrorHandler("User Details Already Exists"))
    }
    const userDetail = await UserDetail.create({
        userId : req.user.id,
        name,
        user_address,
        user_city
    }).catch(()=>{
        return next (new ErrorHandler("Details can not be inserted " , 500))
    })

    if(!userDetail){
        return new ErrorHandler("User Details Not Inserted" , 500)
    }
    res.status(200).json({
        success : true,
        message: "User Details Inserted",
        userDetail
    })
})

exports.updateUserDetail = cathAsyncError(async(req,res,next)=>{
    const {name , user_address , user_city }= req.body
    const update = {name, user_address, user_city}
    // const updatedUser = await User.findByIdAndUpdate(id, { $set: updates }, { new: true });
    const userDetail = await UserDetail.findOneAndUpdate({userId : req.user.id} ,{ $set: update }, { new: true }).catch(()=>{
        return next (new ErrorHandler("Details can not be updated " , 500))
    })
    if(!userDetail){
        return next(new ErrorHandler("User not Updated" , 500))
    }
    res.status(200).json({
        success : true,
        message: "User Details Inserted"
    })
})


exports.getUserDetails = cathAsyncError(async(req,res,next)=>{
    
    const userDetails = await UserDetail.findOne({ userId:req.params.id})
    if(!userDetails){
        return next(new ErrorHandler("User Details Not Available", 404))
    }
    res.status(200).json({
        success : true,
        userDetails
    })
})

exports.deleteUserDetails = cathAsyncError(async(req,res,next)=>{
    
    const userDetails = await UserDetail.findOneAndDelete({ userId:req.params.id})
    if(!userDetails){
        return next(new ErrorHandler("User Details Not Available", 404))
    }
    res.status(200).json({
        success : true,
        message: "User Details Removed Successfully"
    })
})