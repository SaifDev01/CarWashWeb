const ErrorHandler = require("../utils/errorHandler")
const cathAsyncError = require("../middleWare/asyncErrors")
const Type  = require("../models/typeModel")
const {generateOTP} = require('../utils/optGenerator')
require('dotenv')

exports.createType = cathAsyncError(async(req,res,next)=>{
    const  { type_name, type_desc } = req.body
    const type = await Type.create({
        type_name,
        type_desc,
    })
    res.status(201).json({
        success: true,
        message : "Type has been created successfully"
    })

})
exports.deleteType = cathAsyncError(async(req,res,next)=>{
    const type = await Type.findByIdAndDelete(req.params.id)
    if(!type){
        return next(new ErrorHandler("Type Not Available"))
    }
    res.status(201).json({
        success: true,
        message : "Type has been deleted successfully"
    })
})

exports.getAllType = cathAsyncError(async(req,res,next)=>{
    const type = await Type.find()
    res.status(201).json({
        success: true,
        type
    })
    
})

exports.findType = cathAsyncError(async(req,res,next)=>{
    const type = await Type.findById(req.params.id)
    if(!type){
        return next(new ErrorHandler("Type Doesn't Exist"))
    }
    res.status(201).json({
        success: true,
        type
    })
})

exports.updateType = cathAsyncError(async(req,res,next)=>{
    const {type_id, type_desc, type_name} = req.body
    const update = {
        type_desc,
        type_name
    }
    const type = await Type.findByIdAndUpdate(type_id ,{ $set: update }, { new: true })
    if(!type){
        return next(new ErrorHandler("Type Doesn't Exist"))
    }
    res.status(201).json({
        success: true,
        type
    })
})