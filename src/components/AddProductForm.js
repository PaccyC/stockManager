import React from 'react'
import { useState } from 'react';
import { useStockItemContext } from '../hooks/useStockItemsContext';
import {GrClose} from 'react-icons/gr'
import {format} from 'date-fns'
function AddProduct({closeModal}){

    
    const [itemName,setItemName]=useState('');
    const [amount,setAmount]=useState(0);
    const [unitPrice,setUnitPrice]=useState(0);
    const [mfgDate,setMfgDate]=useState(null);
    const [expDate,setExpDate]=useState(null);
    
    const {dispatch}=useStockItemContext();
    
    const handleAddProduct=async(e)=>{
        e.preventDefault();

        const formattedMfgDate = mfgDate ? format(new Date(mfgDate), 'd-MMMM-yyyy') : null;
        const formattedExpDate = expDate ? format(new Date(expDate), 'd-MMMM-yyyy') : null;

        const stockItem={itemName,
          amount,
          unitPrice,
          mfgDate:formattedMfgDate,
          expDate:formattedExpDate};
        
        const response=await fetch('/api/item',{
            method:"POST",
            body:JSON.stringify(stockItem),
            headers:{"Content-Type":"application/json"},
            
        })
        const json=await response.json();
        console.log(json);
        if(response.ok){
            dispatch ({type:"ADD_STOCKITEMS",payload:json});
        }
        
    }
  return (
    <form onSubmit={handleAddProduct}>
      <div className='relative mx-24 w-[750px] h-[600px] bg-aliceBlue left-72 top-28 rounded-[20px] flex flex-col justify-center'>
        
        <h1 className='text-center pt-3 text-blue Inter font-normal text-3xl'>Add Product</h1>
         <GrClose className='  cursor-pointer text-3xl font-semibold absolute right-6 top-3' 
         onClick={()=>closeModal(false)}
         />
        <div className='flex flex-col items-center'>
          <div className='text-start'>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Name:</label>
            <input type='text' className='w-[350px] h-[50px] bg-white border-2 border-nobel rounded-[15px] focus:border-nobel' 
                   onChange={(e)=>setItemName(e.target.value)}
                   value={itemName}
            />
          </div>
               
          <div className='text-start '>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Quantity:</label>
            <input type='number' className='w-[350px] h-[50px] text-[25px] text-center border-2 border-nobel rounded-[15px] hover:border-nobel'
                   onChange={(e)=>setAmount(e.target.value)}
                   value={amount}
            />
          </div>

          <div className='text-start '>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Unit price:</label>
            <input type='number' className='w-[350px] h-[50px] text-[25px] text-center border-2 border-nobel rounded-[15px] hover:border-nobel'
                   onChange={(e)=>setUnitPrice(e.target.value)}
                   value={unitPrice}
            />
          </div>

          <div className='text-start '>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Manufactured Date:</label>
            <input type='date' className='w-[350px] h-[50px] text-[25px] text-center border-2 border-nobel rounded-[15px] hover:border-nobel' 
                   onChange={(e)=>setMfgDate(e.target.value)}
                   value={mfgDate}
            />
          </div>
          <div className='text-start '>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Expired Date:</label>
            <input type='date' className='w-[350px] h-[50px] text-[25px] text-center border-2 border-nobel rounded-[15px] hover:border-nobel mb-2' 
                   onChange={(e)=>setExpDate(e.target.value)}
                   value={expDate}
            />
          </div>
        </div>
         <button className=' absolute text-black bg-blue h-[60px] w-[100px] rounded-[15px] text-2xl right-[200px] bottom-0'>
            Add 
         </button>
     
      </div>
    </form>
  )
}

export default AddProduct;