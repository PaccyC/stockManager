const User=require('../models/userModel');

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { use } = require('../routes/userRoutes');
const e = require('express');


const createToken=(_id)=>{

    return jwt.sign({_id:_id},process.env.SECRET_KEY,{expiresIn:'3d'});
}


exports.register=async(req,res)=>{

    const {username,email,password,address,age}=req.body;

    
    
    try{
        const exists=await User.findOne({email});
    
        if(exists){
            throw Error ("Email already exists");
        }

    if(!username || !email || !password || !address || !age){
        throw Error("All fields must have a value");
    }

    const salt= await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);

    const user= await User.create({username,email,password:hash,address,age});
    
    user.save();
    
    const token=await createToken(user._id);

    res.status(200).json({user:user,token});
    return user;
    }
    catch(error){
        res.json({error:error.message})
    }

    



}

exports.login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
    
        if(!user){
            throw Error ("Email doesn't exist");
        }
        
        if(!email || !password){
            throw Error("All fields must have value");
        }

        const match=await bcrypt.compare(password,user.password);
        if(!match){
            throw Error ("Passwords don't match");
        }

        const token=await createToken(user._id);

        res.status(200).json({user:user,token});
        return user;
    }


    catch (error){
        res.status(400).json({error:error.message})
    }
    


}
exports.update=async(req,res)=>{
  
    const {id}=req.params
    
    try{

        const {username,password,address}=req.body;
        const user=await User.find({});
  
        const salt= await bcrypt.genSalt(10);
         const hash= await bcrypt.hash(password,salt) ;      
         const updatedUser=await User.findByIdAndUpdate(id,{username,password:hash,address})

         res.status(200).json({updatedUser});
         
  
      
    }
     catch(error){
        res.status(400).json({error:error.message})
     }
   

}

exports.delete=async(req,res)=>{

    const {id}=req.params;
    try{
        
    const user =await User.findByIdAndDelete({id});
    }
  catch(error){
  res.status(400).json({error:error.message})
  }
}
