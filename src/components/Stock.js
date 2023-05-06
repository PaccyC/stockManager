import React from 'react'
import { useEffect } from 'react';
import { useStockItemContext } from '../hooks/useStockItemsContext'
import { useAuthContext } from '../hooks/useAuthContext';
import {format} from 'date-fns'
import {enUS} from 'date-fns/locale'
function Stock() {
    const {stockItems, dispatch} = useStockItemContext();

    const {user} = useAuthContext()
useEffect(()=>{
  console.log(stockItems);
},[])
    useEffect(() => {
      const fetchStockItems = async () => {
        const response = await fetch('/api/item',{
          headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json = await response.json()
  
        
        if (response.ok) {
          dispatch({type: 'GET_STOCKITEMS', payload: json.items})
        }
      }
  
      if (user) {
        fetchStockItems();
      }
    }, [dispatch, user,stockItems])
    const handleDelete=()=>{

    }

    //handling update
    const handleUpdate=()=>{
      
    }
  return (
    <div className='relative'>
    <h1 className='font-normal text-[26px] font-400 text-black text-center'>
        Available Products in stock</h1>
        <table className='mx-auto '>
            <tbody>

            <tr>
                <th className='pr-16'>Name</th>
                <th className='pr-16'>Quantity</th>
                <th className='pr-16'>Unit Price</th>
                <th className='pr-16'>Manufactured Date </th>
                <th className='pr-16'>Expired Date</th>
            </tr>
            {stockItems && stockItems?.map((stockItem)=>(
      <tr key={stockItem.id} className='rounded-[20px] bg-aliceBlue mb-4 h-[50px] w-[750px]'>
           <td className='pr-16'>{stockItem.itemName}</td>
           <td className='pr-16'>{stockItem.amount}</td>
           <td className='pr-16'>{stockItem.unitPrice}</td>
           <td className='pr-16'>{format (new Date(stockItem.mfgDate),'d,MM,yyyy',{locale:enUS})}</td>
           <td className='pr-16'>{format (new Date(stockItem.expDate),'d,MM,yyyy',{locale:enUS})}</td>
           <button 
           className='text-black bg-lightRed h-11 w-24 rounded-2xl ml-3'
           onClick={handleDelete}
           >Remove</button>
           <button
            className='text-black bg-blue h-11 w-24 rounded-2xl'
            onClick={handleUpdate}>
              Manage
            </button>
      </tr>
))}
            </tbody>

        </table>
    </div>
  )
}

export default Stock
