const { cwd } = require("process")
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const AsyncError = require("../middleWare/asyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
const Merchant = require('../models/merchantModel')
const Type = require('../models/typeModel')

// Admin
exports.createProduct = AsyncError(async(req , res, next)=>{
    const {m_id, type_id, p_name, p_desc, p_price } = req.body
    const merchant = Merchant.findById(m_id)
    const type = Type.findById(type_id)
    if(!type){
        
        return next(new ErrorHandler("Type Doesn't Exists"))
    }
    if(!merchant){
        return next(new ErrorHandler("Merchant Doesn't Exists"))
    }
    const product = await Product.create({
        m_id,
        type_id,
        p_name, 
        p_desc,
        p_price,
    });
    if(!product){
        return next(new ErrorHandler("Product Not Created", 400))
    }
    res.status(201).json({
        success: true,
        product
    }) 
})

exports.getAllProducts= AsyncError(async(req,res)=>{
    const products = await Product.find()

    res.status(200).json({
        success : true,
        products,
    })
})

exports.deleteProduct = AsyncError(async(req,res, next)=>{
    const _id = req.params.id
    let product = await Product.findById(_id)
    if(!product){
        return next(new ErrorHandler("Product not Found", 404))
    }
    product = await Product.findByIdAndDelete(_id)
    res.status(200).json({
        success : true,
        product
    })
})

exports.updateProduct = AsyncError(async(req, res, next)=>{
    const _id = req.params.id
    let product = await Product.findById(_id)
    if(!product){
        return next(new ErrorHandler("Product not Found", 404))
    }
    
    product = await Product.findByIdAndUpdate(_id,req.body ,{new:true})
    res.status(200).json({
        success:true,
        product
    })
})

exports.getProduct = AsyncError(async(req,res,next)=>{
    const _id = req.params.id
    let product = await Product.findById(_id)
    if(!product){
        return next(new ErrorHandler("Product not Found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
})






