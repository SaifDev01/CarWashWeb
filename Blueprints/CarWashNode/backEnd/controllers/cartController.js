const ErrorHandler = require("../utils/errorHandler")
const cathAsyncError = require("../middleWare/asyncErrors")
const Cart  = require("../models/cartModel")
const User  = require("../models/userModel")
const SubProduct = require('../models/subProduct')

exports.addToCart = cathAsyncError(async (req,res,next)=>{
   
    const { p_id , sub_p_id} = req.body
    const user = await User.findById(req.user.id)
    if(!user){
        return next(new ErrorHandler("User Doesn't Exist", 404))
    }

    
    let updateFields = {}
    if (p_id) {
        updateFields = { $push: {p_id} }
    }
    if (sub_p_id) {
        updateFields = { $push: {sub_p_id} }
    } 
    if(!p_id && !sub_p_id){
        return next(new ErrorHandler("Missing p_id or sub_p_id field", 400))
    }
 
    const cart = await Cart.findOneAndUpdate(
        { u_id: user.id }, 
        updateFields,
        { upsert: true, new: true }, 
    )
    if(!cart){
        return next(new ErrorHandler("Item not inserted" , 400))
    }
    res.status(201).json({
        success: true,
        message : "Added Successfully",
        cart,
    })
})

exports.checkCart = cathAsyncError(async (req,res,next)=>{

    const cart = await Cart.findOne({u_id : req.user.id})

    if(!cart){
        return next(new ErrorHandler("Nothing in the Cart" , 404))
    }
    res.status(200).json({
        success: true,
        cart
    })
})
exports.removeCartItem = cathAsyncError(async (req,res,next)=>{ 
    const { p_id} = req.body  
    const cart = await Cart.findOne({ u_id : req.user.id});
    const p_idIndex = cart.p_id.indexOf(p_id);
    if (p_idIndex === -1) {
        return next(new ErrorHandler("Product not found in cart", 404));
    }
    cart.p_id.splice(p_idIndex, 1);
    await cart.save();
    if(!cart){
        return next(new ErrorHandler("Nothing in the Cart" , 400))
    }
    res.status(201).json({
        success: true,
        cart,
        message : "Product removed from the cart"
    })
})

exports.emptyCart = cathAsyncError(async(req,res,next)=>{
    const cart = await Cart.findOneAndUpdate({ u_id: req.user.id }, { $unset: { p_id: 1 } }, { new: true });
    if(!cart){
        return next(new ErrorHandler("Cart's already empty", 400))
    }
    res.status(201).json({
        success: true,
        message : "Cart emptied successfully"
    })
})




