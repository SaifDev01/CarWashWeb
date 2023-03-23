const ErrorHandler = require("../utils/errorHandler")
const cathAsyncError = require("../middleWare/asyncErrors")
const Branch  = require("../models/branchModel")
const {generateOTP} = require('../utils/optGenerator')
const Product  = require('../models/productModel')
const SubProduct = require('../models/subProduct')
require('dotenv')


exports.createBranch = cathAsyncError(async(req,res,next)=>{
    const {b_name, b_address, location, b_username, b_password,
    b_phone, b_image, b_locality, m_id, b_start_time, b_end_time
   , b_state } = req.body
    
   const products = await Product.find({m_id}).select('_id')
    // const sub_products = await SubProduct({p_id}).select('_id')


    const branch = await Branch.create({
        b_name,
        b_address,
        b_locality,
        location,
        b_username,b_password,
        b_phone,
        b_image,
        m_id,
        b_start_time,
        b_end_time,
        b_state,
        products,
        
    })

    res.status(201).json({
        success: true,
        branch
    })
})
exports.deleteBranch = cathAsyncError(async(req,res,next)=>{
    const branch = await Branch.findByIdAndDelete(req.params.id)
    if(!branch){
        return next(new ErrorHandler("Branch Doesn't Exist" , 404))
    }
    res.status(201).json({
        success: "true",
        message: `Branch Deleted Successfully`, 
    })
})

exports.getBranch = cathAsyncError(async(req,res,next)=>{
    const branch = await Branch.findById(req.params.id)
    if(!branch){
        return next(new ErrorHandler("Branch Doesn't Exist" , 404))
    }
    res.status(201).json({
        success: "true",
        branch, 
    })
})
exports.getAllBranch = cathAsyncError(async(req,res,next)=>{
    const branch = await Branch.find()
    if(!branch){
        return next(new ErrorHandler("Branch Doesn't Exist" , 404))
    }
    res.status(201).json({
        success: "true",
        branch, 
    })
})

exports.updateBranch = cathAsyncError(async(req,res,next)=>{
    const {b_name, b_address, location, b_username, b_password,
        b_phone, b_image, b_locality, m_id, b_start_time, b_end_time
       , b_state } = req.body
    const update = {b_name, b_address, location, b_username, b_password,
        b_phone, b_image, b_locality, b_start_time, b_end_time
       , b_state }
    const branch = await Branch.findOneAndUpdate({m_id} ,{ $set: update }, { new: true })
    if(!branch){
        console.log(branch);
        return next(new ErrorHandler("Branch Doesn't Exist"))
    }
    res.status(200).json({
        success : true,
        message: "Branch Details Inserted"
    })

})


exports.test = cathAsyncError(async(req,res,next)=>{    
    const {p_id} = req.body
    
    
    const products = await SubProduct.find({p_id}).select('_id')

    res.status(200).json({
        success : true,
        products
    })

})

exports.changeProductStatus = cathAsyncError(async(req,res,next)=>{
    const {p_id, b_id , active} = req.body
    const product = await Branch.findOneAndUpdate(
        { _id: b_id, 'products._id': p_id },
        { $set: { 'products.$.active': active } },
        { new: true })
    if(!product){
        return next( new ErrorHandler("Product Can not be Updated"))
    }
    
    res.status(200).json({
        success : true,
        product
    })

})
    
