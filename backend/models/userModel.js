const mongoose=require('mongoose');

const validator=require('validator')
const bcrypt=require('bcrypt');
const userSchema= new mongoose.Schema({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:Number,
    required:true
  },
 username:{
      type:String,
      required:true
    },
  
  email:{
      type:String,
      required:true,
      unique:true
  },
    password:{
        type:String,
        required:true
    }
})


userSchema.statics.signup = async function(firstName,lastName,phoneNumber,username,email, password) {

    // validation
    if (!firstName || !lastName || !phoneNumber || !username || !email || !password ) {
      throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) {
      throw Error('Password not strong enough')
    }
  
    const exists = await this.findOne({ email })

    if (exists){
      throw Error('Email already in use')
    }
  
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({firstName,lastName,phoneNumber,username,email, password: hash })
  
    return user
  }
const User=mongoose.model('user',userSchema);

module.exports=User;