const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    m_id : {
        type : mongoose.Schema.ObjectId,
        ref: 'Merchant'
    },
    type_id: {
        type : mongoose.Schema.ObjectId,
        ref: 'Type'
    },
    p_name: {
        type : String,
        required : [true , "Enter Product Name"]
    },
    p_desc :{ 
        type : String,
        required : [true , "Enter Product Name"]
},
    p_price : {
        type : Number , 
        required : [true ,  "Enter Product Price"]
    },
    p_status : {
        type: Boolean , 
        default : true

    },

  }, { timestamps: true }) 


module.exports = mongoose.model("Product", productSchema)
