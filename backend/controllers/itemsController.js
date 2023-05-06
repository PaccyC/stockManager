
const Items=require('../models/itemsModel');

const addItem=async(req,res)=>{

    const {itemName,amount,unitPrice,mfgDate,expDate}=req.body;
    
    try{
     if(!itemName || !unitPrice || !amount || !mfgDate || !expDate){
        throw Error("All fields must have value");
     }
     const item= await Items.create({itemName,amount,unitPrice,mfgDate,expDate});
     res.status(200).json({item});
     return item;

    }
    catch(error){
        res.status(400).json({error:error.message})
    }

}

const getItems=async(req,res)=>{
try{

    const items= await Items.find({});
    res.status(200).json({items,ok:true});
}

catch(error){

    if(error){
     res.status(400).json({error:error.message})
    }
}

}

const updateItem=async(req,res)=>{

    const {amount,mfgDate,expDate}=req.body
   
   if(!itemName || !amount || !mfgDate || !expDate){
           throw Error("All fields must have value");
        }
    try{

        const {id}=req.params
        const updatedItem= await Items.findByIdAndUpdate(id,{amount,mfgDate,expDate})
        updatedItem.save();
        res.status(200).json({updatedItem})
    }
 
    catch(err){
        res.status(400).json({err:err.message})
    }


}

const deleteItem = async (req, res) => {
    try {
      const id = req.params.id;
      const item = await Items.findByIdAndDelete(id);
      if (!item) {
        return res.status(404).json({ error: `Item with id ${id} not found` });
      }
      res.status(200).json({
        message: `Item with id of ${item._id} has been successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  const getItemsById=async(req,res)=>{
try{
const {id}=req.params
const item=await Items.findById(id);
if (!item) {
    return res.status(404).json({ error: `Item with id ${id} not found` });
  }
  res.status(200).json({item});
}
catch(error){
    res.status(400).json({error:error.message})
}

  }

module.exports={
    addItem,
    getItems,
    updateItem,
    deleteItem,
    getItemsById
}