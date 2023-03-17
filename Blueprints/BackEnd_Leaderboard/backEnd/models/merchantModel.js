const { kMaxLength } = require("buffer")
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
merchantSchema = new mongoose.Schema({
    m_name : {
        type : String ,
        required : [true , "Enter Your Name"]  
    },
    m_address : { 
        type :  String ,
        required : [true , "Enter Your Addresss"]  
    },
  
    m_state_en  : {
        type : String , 
        required : [true , "Enter Your State"] 
    }, 
    m_state_ar  : {
        type : String , 
        required : [true , "Enter Your State in Arabic"] 
    }, 
    m_username : {
        type : String , 
        required : [true , "Enter Your Username"]
    },
    m_password :{ 
        type : String ,
        required : [true , "Enter Your Password"] ,
        minLength : [8 , "Password should be Greater than 8 Character "],
        select : false
    },
    m_phone : {
        type : Number ,
        unique : true,
        required : [true , "Enter Your Contact"] ,
    },
    m_logo : {
        public_id :{
            type : String, 
            required : true
        },
        url : {
            type : String,
            required : true
        }
    },
    m_desc : {
        type : String ,  
        required : [true , "Enter Your Description"],
        
    }, 
 
    m_status : {
        type : Boolean,
        default : true
    },
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
}, { timestamps: true })

merchantSchema.index({ location: "2dsphere" });

merchantSchema.pre("save", async function(next){
    if(!this.isModified("m_password")){
        next()
    }
    this.m_password = await bcrypt.hash(this.m_password, 10)
})
merchantSchema.methods.isPasswordMatch = async function(enterdPassword) {
    return await bcrypt.compare(enterdPassword, this.m_password);
}
merchantSchema.methods.getJWTToken = function(){
    return jwt.sign({id :this._id }, process.env.JWT_SECRET )      
}


module.exports = mongoose.model("Merchant", merchantSchema)