const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


branchSchema = new mongoose.Schema({
    b_name : {type : String  , required : [true , "Enter Your Branch Name"]  },
    b_address : { type :  String  , required : [true , "Enter Your Branch Address"] },
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: [true, "Please enter Co-ordinates"]
        }
      },    
    b_username : {type : String , required : [true , "Enter Your Username"] },
    b_password :{ type : String ,
    required : [true , "Enter Your Password"] ,
    minLength : [8 , "Password should be Greater than 8 Character "],
    select : false
    },
    b_phone : {
        type : Number ,
        required : [true , "Enter Your Branch Contact"] 
    },
    b_image : {
        public_id :{
            type : String, 
            required : true
            
        },
        url : {
            type : String,
            required : true
        }
    },
    b_locality : {
        type : String , required : [true , "Enter Your Branch Locality"] 
    },
    b_status : {
        type : Boolean , default : true
    },
    b_state : {
        type: String,
        required : [true , "Enter Your Branch State"] ,
    },
    m_id : {
        type : mongoose.Schema.ObjectId, 
        ref : 'Merchant',
    },
    b_start_time : { type: String , required : [true, "Enter Opening Time"]},
    b_end_time : { type: String , required : [true, "Enter Closing Time"]},
    products: [{
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        active: {
          type: Boolean,
          default: true
        }
      }],
      // sub_products: [{
      //   sub_product: {
      //       type: mongoose.Schema.Types.ObjectId,
      //       ref: 'SubProduct',
      //       required: true
      //   }  , 
      //   active: {
      //       type: Boolean,
      //       default: true
      //   }
      // }]
    



    


} , { timestamps: true } )

branchSchema.pre("save", async function(next){
    if(!this.isModified("b_password")){
        next()
    }
    this.password = await bcrypt.hash(this.b_password, 10)


})






module.exports = mongoose.model("Branch", branchSchema)