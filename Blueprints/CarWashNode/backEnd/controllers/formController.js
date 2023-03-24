const ErrorHandler = require("../utils/errorHandler")
const cathAsyncError = require("../middleWare/asyncErrors")
require('dotenv')

exports.formData = cathAsyncError(async(req,res,next)=>{
    const formData  = req.body
    res.status(200).json({
        success : true,
        message : 'Message Sent Successfully'
    })
})







