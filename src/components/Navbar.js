import React, { useRef, useState } from 'react';
import logo from '../images/logo.svg';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineStock } from 'react-icons/ai';
import {IoMdNotifications} from 'react-icons/io';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'


export default function Navbar() {
  const [isStockActive, setIsStockActive] = useState(false);
  const [isDashboardActive, setIsDashboardActive] = useState(false);
  const menus=["Settings","Profile Information","Notifications","Logout"];
  const [open,setOpen]=useState(false);
  const menuRef=useRef();


  return (
    <div className='w-[100%] h-[120px] left-0 top-0 bg-aliceBlue border-2 border-s border-silver flex justify-between items-center pr-5'>
      <img src={logo} alt=''/>
      <div className='flex md:flex-row text-center'>
        <Link
          className={`px-5 flex items-center `}
          onClick={() => {
            setIsStockActive(true);
            setIsDashboardActive(false);
          }}
          to='/stock'
        >
          <AiOutlineStock className='text-blue text-4xl mr-2' to='/stock'/>
          <h2 className={`text-lg font-semibold ${isStockActive ? "text-blue" : "text-black"} ${
            isStockActive ? 'border-b-2 border-blue' : ''
          }`}>Stock</h2>
        </Link>
      </div>
      <div className='flex md:flex-row text-center'>
        <Link
          className={`px-5 flex items-center `}
          onClick={() => {
            setIsDashboardActive(true);
            setIsStockActive(false);
          }}
          to='/'
        >
          <MdOutlineDashboard className='text-blue text-4xl mr-2' to='/dashboard' />
          <h2 className={`ext-lg font-semibold ${isDashboardActive ? "text-blue":"text-black"} ${
            isDashboardActive ? 'border-b-2 border-blue' : ''
          }`}>Dashboard</h2>
        </Link>
      </div>
      <div className='notification-icon'>
       
       <Link to='/notifications'>
        <IoMdNotifications className='text-4xl fill-nobel'/>
       </Link>
    
      </div>
      <div className='relative w-[175px] h-[70px] bg-aliceBlue border-s border-2 border-gray rounded-[40px]'>
        <button className='absolute top-[50%] left-[70%] text-4xl font-normal'>
          <MdOutlineKeyboardArrowDown onClick={()=>setOpen(!open)} />
        </button>
      {open &&
        <div ref={menuRef} className='absolute bg-white w-52 shadow-lg right-10 top-24'>
          <ul className=' '>

          {
            menus.map((menu)=>(
              <li className={` p-2 text-lg cursor-pointer ${menu ==='Logout' && 'text-red-700'} rounded hover:bg-aliceBlue`} key={menu}>{menu}</li>

              ))
              }
        </ul>

        </div>
      }
      </div>
    </div>
  );
}