const mongoose = require("mongoose")
const Branch = require('./branchModel')

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


subProductSchema.pre('save', async function(next) {
    try {
      const subProduct = this;
      const branches = await Branch.find({p_id: this.p_id});
  
      // add the new product to each branch's products array
      const updatePromises = branches.map(branch => {
        branch.sub_products.push(subProduct._id);
        return branch.save();
      });
  
      await Promise.all(updatePromises);
      next();
    } catch (error) {
      next(error);
    }
  });


module.exports = mongoose.model("SubProduct", subProductSchema)