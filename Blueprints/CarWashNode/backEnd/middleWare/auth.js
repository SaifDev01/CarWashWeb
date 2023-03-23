const jwt = require("jsonwebtoken")
const cathAsyncError = require("./asyncErrors")
const express = require("express");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel")
const Merchant = require('../models/merchantModel')
exports.isAuthenticated = cathAsyncError(async ( req,res,next)=>{
    const {token} = req.cookies ;
    console.log(token);
    if(!token){
        return next(new ErrorHandler("Please Login To Access This Resourse", 401))
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decodedData.id)
    const merchant = await  Merchant.findById(decodedData.id)
    // console.log(user);
    if(!user){
        
        req.user = merchant

        return next();
    }
    req.user = user 
     
    console.log(req.user);
    next();
})

exports.authorizeRole = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access the resource`, 403));
        }

        next();
    }
}

