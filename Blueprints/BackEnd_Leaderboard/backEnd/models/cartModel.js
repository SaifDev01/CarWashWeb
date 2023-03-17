const mongoose = require("mongoose")

cartSchema = new mongoose.Schema({
    u_id : { type : mongoose.Schema.ObjectId  , ref : 'User'},
    p_id : [{
        type : mongoose.Schema.ObjectId,
        ref : "Product"
    }],
        
}, { timestamps: true }
)

    
module.exports = mongoose.model("Cart", cartSchema)