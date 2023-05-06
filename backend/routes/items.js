const express=require('express')

const {addItem,
    getItems,
    getItemsById,
    updateItem,
    deleteItem}= require('../controllers/itemsController')


    //adding middleware
    const authMiddleware =require('../middlewares/authMiddleware')

const router=express.Router();

// router.use(authMiddleware);

router.get('/',getItems);
router.get('/:id',getItemsById);

router.post('/',addItem);

router.put('/:id',updateItem);

router.delete('/:id',deleteItem);


module.exports=router;
