const ErrorHandler = require("../utils/errorHandler")
const cathAsyncError = require("../middleWare/asyncErrors")
const Cart  = require("../models/cartModel")
const User  = require("../models/userModel")
require('dotenv')


exports.addToCart = cathAsyncError(async (req,res,next)=>{
    console.log("saf");
    const {u_id , p_id} = req.body
    const user = User.findById(u_id)
    if(!user){
        return next(new ErrorHandler("User Doesn't Exist", 404))
    }
    const cart = await Cart.findOneAndUpdate(
        { u_id }, 
        { $push: {p_id} },
        { upsert: true, new: true }, 
    )
    // const plainCart = cart.toObject()
    if(!cart){
        return next(new ErrorHandler("Item not inserted" , 400))
    }
    res.status(201).json({
        success: true,
        message : "Added Successfully",
        cart
    })
})

exports.checkCart = cathAsyncError(async (req,res,next)=>{

    const cart = await Cart.findOne({u_id : req.params.id})

    if(!cart){
        return next(new ErrorHandler("Nothing in the Cart" , 400))
    }
    res.status(201).json({
        success: true,
        cart
    })
})
exports.removeCartItem = cathAsyncError(async (req,res,next)=>{ 
    const {u_id , p_id} = req.body  
    const cart = await Cart.findOne({ u_id });
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
    const cart = await Cart.findOneAndUpdate({ u_id: req.params.id }, { $unset: { p_id: 1 } }, { new: true });
    if(!cart){
        return next(new ErrorHandler("Cart's already empty", 400))
    }
    res.status(201).json({
        success: true,
        message : "Cart emptied successfully"
    })
})




