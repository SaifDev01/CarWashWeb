const jwt = require("jsonwebtoken")
const cathAsyncError = require("./asyncErrors")
const express = require("express");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel")
exports.isAuthenticated = cathAsyncError(async ( req,res,next)=>{
    const {token} = req.cookies ;
    console.log(token);
    if(!token){
        return next(new ErrorHandler("Please Login To Access This Resourse", 401))
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
    req.user =  await User.findById(decodedData.id)
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

