const ErrorHandler = require("../utils/errorHandler")
const cathAsyncError = require("../middleWare/asyncErrors")
const Merchant  = require("../models/merchantModel")
const {generateOTP} = require('../utils/optGenerator')
const jwtToken = require("../utils/getJWToken")

exports.createMerchant = cathAsyncError(async (req,res,next)=>{
    const {m_name, m_address, m_long, m_lat, m_state_en, m_state_ar,
        m_username,m_password, m_phone , m_logo , m_desc 

    } = req.body
    
    const merchant = await Merchant.create(req.body)

    if(!merchant){
        return next(new ErrorHandler("Merchant can not be created", 400))
    }
    res.status(200).json({
        success: true,
        merchant
    })
})

exports.deleteMerchant = cathAsyncError(async(req,res,next)=>{
    const merchant = await Merchant.findByIdAndDelete(req.params.id)
    if(!merchant){
        return next(new ErrorHandler("Merchant Doesn't Exist" , 404))
    }
    res.status(201).json({
        success: true,
        message: `Merchant Deleted Successfully`, 
    })
})

exports.getMerchant = cathAsyncError(async(req,res,next)=>{
    const merchant = await Merchant.findById(req.params.id)
    if(!merchant){
        return next(new ErrorHandler("Merchant Doesn't Exist" , 404))
    }
    res.status(200).json({
        success: true,
        merchant, 
    })
})


exports.suspendMerchant = cathAsyncError(async (req,res,next)=>{
    const {status, m_id} = req.body
    const merchant = await Merchant.findById(m_id)
    if(!merchant){
     return next(new ErrorHandler("Merchant Doesn't Exists"))
    }
    merchant.status = status
    await merchant.save()
    res.status(201).json({
     success: true,
     message: `Merchant Status Change to ${status} successfully`, 
 })
})

exports.updateMerchant = cathAsyncError(async(req,res,next)=>{
   
    const merchant = await Merchant.findByIdAndUpdate(req.params.id ,{ $set: req.body }, { new: true })
    if(!merchant){
        return next(new ErrorHandler("Merchant not Updated"))
    }
    
    res.status(200).json({
        success : true,
        message: "Merchant Details Updated"
    })

})

exports.getAllMerchants = cathAsyncError(async(req,res,next)=>{
    const merchants = await Merchant.find()
    if(!merchants){
        return next(new ErrorHandler("No Merchants to show" , 404))
    }
    res.status(200).json({
        success : true,
        merchants
    })
})

exports.loginMerchant = cathAsyncError(async(req,res,next)=>{
    const {m_phone, m_password} = req.body;
    if(!m_phone || !m_password){
        return next(new ErrorHandler("Enter username and password", 400));
    }
    const merchant = await Merchant.findOne({m_phone}).select("+m_password");
    if(!merchant){
        return next(new ErrorHandler("Invalid username or Password", 401));
    }
    const matchPassword = await merchant.isPasswordMatch(m_password);
    if(!matchPassword){
        return next(new ErrorHandler("Invalid username or Password", 401));
    }

    jwtToken(merchant, 200, res);

})

module.exports.logoutMerchant = cathAsyncError(async(req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: "Logged Out"
    });
});


