const mongoose = require("mongoose")

subProductSchema = new mongoose.Schema({
    p_id : {
        type : mongoose.Schema.ObjectId,
        ref : 'Product'
    },
    sub_p_name: {
        type: String,
        required: [true , "Enter Sub-Product Name"]
    },
    sub_p_desc : {
        type: String , required : [true , "Enter Description"]
    },
    sub_p_price  :{
        type: Number , required : [true , "Enter Description"]
    },
    sub_p_status : {
        type: Boolean , default : true
    }
}, { timestamps: true })



module.exports = mongoose.model("SubProduct", subProductSchema)