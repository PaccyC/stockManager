import React,{useState} from 'react'
import { useStockItemContext } from '../hooks/useStockItemsContext';
function Manage({stockItem}) {
  const [itemName,setItemName]=useState('');
  const [amount,setAmount]=useState(0);
  const [unitPrice,setUnitPrice]=useState(0);
   
  const{dispatch} =useStockItemContext();
    const handleUpdateProduct=async(e)=>{
      e.preventDefault();
     const stockItem={itemName,amount,unitPrice};
     
     const response=await fetch(`/api/item/${stockItem._id}`,{
       method:"PUT",
       body:JSON.stringify(stockItem),
       headers:{"Content-Type":"application/json"},
     
     })

     const json=await response.json();
     if(response.ok){
      dispatch({type:"UPDATE_STOCKITEM",payload:json});
     }
    
   }
  return (
    <form onSubmit={()=>{
    }}>
      <div className='absolute w-[900px] h-[70vh] bg-aliceBlue left-24 top-36 rounded-[20px] flex flex-col justify-center'>
        <h1 className='text-center mb-6 text-blue Inter font-normal text-3xl'>Manage</h1>
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
        </div>
         <button className=' absolute text-black bg-blue h-[60px] w-[100px] rounded-[15px] text-2xl right-[200px] bottom-3'
         onClick={()=>handleUpdateProduct}
         >
        Save
          </button>
     
      </div>
    </form>
  )
}

export default Manage