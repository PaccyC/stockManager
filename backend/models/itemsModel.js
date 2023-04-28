const mongoose=require('mongoose');

const itemsSchema= new mongoose.Schema({

    itemName:{
        type:String,
        required:true        
    },
    amount:{
        type:Number,
        required:true
    },
    mfgDate:{
        type:Date,
        required:true
    },
    expDate:{
        type:Date,
        required:true
    }
})

const Items=mongoose.model('item',itemsSchema);

module.exports=Items


