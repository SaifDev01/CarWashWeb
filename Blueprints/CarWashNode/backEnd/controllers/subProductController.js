const SubProduct = require("../models/subProduct");
const ErrorHandler = require("../utils/errorHandler");
const AsyncError = require("../middleWare/asyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
const Product = require("../models/productModel");
const Branch = require('../models/branchModel')
// Admin
exports.createSubProduct = AsyncError(async(req , res, next)=>{
    const {p_id, sub_p_name, sub_p_desc, sub_p_price } = req.body
    const product = await Product.findById(p_id)
    if(!product){
        return next(new ErrorHandler("Product Doesn't Exist", 404))
    }

    const subProduct = await SubProduct.create({
        p_id,
        sub_p_name, 
        sub_p_desc,
        sub_p_price
    });
    if(!subProduct){
        return next(new ErrorHandler("SubProduct Not Created", 400))
    }
    res.status(201).json({
        success: true,
        subProduct
    }) 
})

exports.getAllSubProducts= AsyncError(async(req,res)=>{
    const subProducts = await SubProduct.find()

    if(!subProducts){
        return next(new ErrorHandler("Sub Products not found" , 404))
    }
    res.status(200).json({
        success : true,
        count: subProducts.length,  
        subProducts,
    })
})

exports.deleteSubProduct = AsyncError(async(req,res, next)=>{
    const _id = req.params.id
    const subProduct = await SubProduct.findById(_id)
    if(!subProduct){
        return next(new ErrorHandler("SubProduct not Found", 404))
    }
    await SubProduct.findByIdAndDelete(_id)
    res.status(200).json({
        success : true,
          subProduct
    })
})

exports.updateSubProduct = AsyncError(async(req, res, next)=>{
    const _id = req.params.id
    let subProduct = await SubProduct.findById(_id)
    if(!subProduct){
        return next(new ErrorHandler("SubProduct not Found", 404))
    }
    
    subProduct = await SubProduct.findByIdAndUpdate(_id,req.body ,{new:true})
    res.status(200).json({
        success:true,
        subProduct
    })
})

exports.getSubProduct = AsyncError(async(req,res,next)=>{
    const _id = req.params.id
    let subProduct = await SubProduct.findById(_id)
    if(!subProduct){
        return next(new ErrorHandler("SubProduct not Found", 404))
    }
    res.status(200).json({
        success: true,
        subProduct
    })
})

exports.getSubProductByBranch = AsyncError(async(req,res,next)=>{
    const {p_id , b_id} = req.body


    const subProducts = await Branch.findById(b_id).select('sub_products')
    .populate({
        path: "sub_products",
        populate : {
            path : "_id",        
            model : 'SubProduct',
            match: { p_id}
        }
    })
  
    res.status(200).json({
        success: true,
        subProducts
    })

})





