const mongoose = require("mongoose")
const Branch = require('./branchModel')
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



  productSchema.pre('save', async function(next) {
    try {
      const product = this;
      const branches = await Branch.find({m_id: this.m_id});
  
      // add the new product to each branch's products array
      const updatePromises = branches.map(branch => {
        branch.products.push(product._id);
        return branch.save();
      });
  
      await Promise.all(updatePromises);
      next();
    } catch (error) {
      next(error);
    }
  });

module.exports = mongoose.model("Product", productSchema)
