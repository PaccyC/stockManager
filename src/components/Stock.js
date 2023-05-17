import React, { useState } from 'react'
import { useEffect } from 'react';
import { useStockItemContext } from '../hooks/useStockItemsContext'
import { useAuthContext } from '../hooks/useAuthContext';
import {format} from 'date-fns'
import {enUS} from 'date-fns/locale'
import Footer from './Footer';
import {MdAdd} from 'react-icons/md'
import AddProduct from './AddProductForm';
import Manage from '../components/Manage';
import {Link} from 'react-router-dom'
import MenuDropDown from './MenuDropDown';
import Navbar from './Navbar';
function Stock() {
    const {stockItems, dispatch} = useStockItemContext();

    const {user} = useAuthContext()
useEffect(()=>{
  console.log(stockItems);
},[stockItems])
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
    }, [dispatch, user])
    const handleDelete=async({stockItem})=>{
    const response=await fetch(`/api/item/${stockItem._id}`,{
      method:"DELETE"
    })

    const json=await response.json();
    if(response.ok){
      
          dispatch({type:"DELETE_ITEM",payload:json});
        }
    }
 //popup states
 const [openModal,setOpenModal]=useState(false)
 const [openUpdateModal,setOpenUpdateModal]=useState(false)
 const [isInactive,setIsInactive]=useState(false);
 const handleOpenModal = () => {
  setOpenModal(true);
  setIsInactive(true); // Set other elements as inactive when the popup is opened
};

const handleOpenUpdateModal = () => {
  setOpenUpdateModal(true);
  setIsInactive(true);
};
const handleCloseModal = () => {
  setOpenModal(false);
  setIsInactive(false);
};
const updateItem=(id)=>{
console.log(id);
}
  return (
    <>
    <Navbar/>
    <MenuDropDown/>
    <div className='absolute w-[1235px] h-[90vh] top-36 left-[270px]'> 
    <div className={` ${isInactive ? 'inactive' : ''}`}>
    <h1 className='font-normal text-[26px] font-400 text-black text-center my-4'>
        Available Products in stock</h1>
    <Link to='/' className='absolute text-2xl font-400 Inter text-[#000AFF] right-11 top-5'>View All</Link>
        <table className='mx-auto '>
            <tbody>

            <tr>
                <th className='pr-16'>Name</th>
                <th className='pr-16'>Quantity</th>
                <th className='pr-16'>Unit Price</th>
                <th className='pr-16'>Manufactured Date </th>
                <th className='pr-16'>Expiry Date</th>
            </tr>

            {stockItems && stockItems?.map((stockItem)=>(
              
              
              
              <tr key={stockItem._id} className='rounded-[20px] bg-aliceBlue  h-[50px] w-[750px]'>
           <td className='pr-16'>{stockItem.itemName}</td>
           <td className='pr-16'>{stockItem.amount}</td>
           <td className='pr-16'>{stockItem.unitPrice}</td>
           <td className='pr-16'>{format (new Date(stockItem.mfgDate),'d, MMMM, yyyy',{locale:enUS})}</td>
           <td className='pr-16'>{format (new Date(stockItem.expDate),'d, MMMM, yyyy',{locale:enUS})}</td>
           <button 
           className='text-black bg-lightRed h-11 w-24 rounded-2xl ml-3'
           onClick={handleDelete}
           >Remove</button>
         <button
  className='text-black bg-[#3077FF] h-11 w-24 rounded-2xl ml-5'
  onClick={() => {
    handleOpenUpdateModal();
    updateItem(stockItem._id);
  }}
>
  Manage
</button>
      </tr>

))}
            </tbody>

        </table>
        <hr className='absolute h-[0] w-[1000px] border-s border-1 border-[#BBBBBB] shadow-md bg-opacity-25 bottom-52 left-64'></hr>
        <button className='absolute flex flex-row h-14 w-44 text-center pl-3 rounded-3xl items-center bg-[#6688FF] text-black bottom-36 right-56'
        onClick={handleOpenModal}
        >
        Add Products<MdAdd className='pl-1 font-bold text-4xl'/>
        </button>

    </div>
    {openModal && <AddProduct closeModal={handleCloseModal} /> }
    {openUpdateModal && <Manage closeUpdateModal={handleCloseModal}/>}
{/*     
        <Footer/> */}
    </div>
          </>
  )
}

export default Stock
