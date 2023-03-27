const { cwd } = require("process")
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const AsyncError = require("../middleWare/asyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
const Merchant = require('../models/merchantModel')
const Type = require('../models/typeModel');
const Branch = require("../models/branchModel");

// Admin
exports.createProduct = AsyncError(async(req , res, next)=>{
    const { type_id, p_name, p_desc, p_price } = req.body
    const merchant = await Merchant.findById(req.user.id)
    const type = await Type.findById(type_id)
    if(!type){
        
        return next(new ErrorHandler("Type Doesn't Exists"))
    }
    if(!merchant){
        return next(new ErrorHandler("Merchant Doesn't Exists"))
    }
    const product = await Product.create({
        m_id: req.user.id,
        type_id,
        p_name, 
        p_desc,
        p_price,
    }).catch(()=>{
        return next(new ErrorHandler("Product Not Created", 400))
    })
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
    if (product.m_id !== req.user.id) {
        return next(new ErrorHandler("Not authorized to delete this product", 403));
    }
    product = await Product.findByIdAndDelete(_id)
    res.status(200).json({
        success : true,
        product
    })
})

exports.deleteOwnProduct = AsyncError(async(req,res,next)=>{
    const _id = req.params.id
    let product = await Product.findById(_id)
    if(!product){
        return next(new ErrorHandler("Product not Found", 404))
    }
    if (product.m_id !== req.user.id) {
        return next(new ErrorHandler("Not authorized to delete this product", 403));
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
    if (product.m_id !== req.user.id) {
        return next(new ErrorHandler("Not authorized to update this product", 403));
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


exports.getBranchProductByType = AsyncError(async(req,res,next)=>{
    const {type_id , b_id}  = req.body
    const branch = await Branch.findById(b_id)
    if(!branch){
        return next(new ErrorHandler("Branch not Found"), 404)
    }
    const productIds = branch.products
    let products = await Product.find({ _id: { $in: productIds }, type: type_id })
    if(!products){
        return next(new ErrorHandler("No Products to Display for this type"), 404)
    }
    res.status(200).json({
        success: true,
        products
    })
    
})


exports.getOwnProducts = AsyncError(async(req,res,next)=>{
    console.log("me");
    
    const products = await Product.find({m_id: req.user.id})
    if(!products.length>0){
        return next(new ErrorHandler("No Products to Show", 404))
    }
    res.status(200).json({
        success: true,
        products
    })
})






