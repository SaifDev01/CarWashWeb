const Order = require("../models/orderModel")
const Product = require("../models/productModel")
const ErrorHandler = require("../middleWare/error") 
const catchAsyncError = require("../middleWare/asyncErrors")

exports.newOrder = catchAsyncError(async (req,res,next)=>{
    const {shipInfo, orderItem,paymentInfo,itemPrice,taxPrice,shippingPrice , totalPrice} = req.body

    const order = await order.Create({
        shipInfo,
        orderItem,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt : Date.now(),
        user: req.user._id
    })
    res.status(201).json({
        success: true,
        order
    })
})