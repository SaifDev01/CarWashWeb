const ErrorHandler = require("../utils/errorHandler")

module.exports = (err ,req,res,next)=>{
    err.statusCode = err.statusCode || 500; 
    err.message = err.message || "Internal server Error"

    if(err.name === "CastError"){
        const message = `Resource not found. Invalid : ${err.path}`
        err  = new ErrorHandler(message,400)
    }
    if(err.code === 11000) {
        // return next(new ErrorHandler("This email is already",500));
        // const message = `Already Exists : ${err.details}`
        // err  = new ErrorHandler(message,400)
        const duplicatedKey = Object.keys(err.keyValue)[0];
        const message = `${duplicatedKey} already exists. Please provide another ${duplicatedKey} `;
        err = new ErrorHandler(message, 400);
    }
    res.status(err.statusCode).json({
        success : false,
        message : err.message
    })
}