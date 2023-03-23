const mongoose = require("mongoose")

typeSchema = new mongoose.Schema({
    type_name: {
        type : String , required : [true , "Enter Your Type Name"] 
    }, 
    type_desc : {
        type : String , required : [true , "Enter Your Type Description"] 
    },
 
    type_status : {
        type : Boolean ,
        default :  true 
    },

}, { timestamps: true })



module.exports = mongoose.model("Type", typeSchema)