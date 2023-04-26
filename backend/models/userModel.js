const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
    type:String,
    required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=mongoose.model('user',userSchema);

module.exports=User;