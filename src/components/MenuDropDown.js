import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import {FaHistory} from 'react-icons/fa'
import  { FaCheck } from 'react-icons/fa';

export default function MenuDropDown() {
    const menus = [
      { name: 'history', link: '/', icon:FaHistory },
        { name: 'settings', link: '/', icon: FiSettings },
        { name: 'Sold Products', link: '/', icon: FaCheck},
        { name: 'logout', link: '/', icon: FiLogOut },
]
      const [isActive,setIsActive]=useState(false);
      const[selectedMenu,setSelectedMenu]=useState(null)

    
      const [open, setOpen] = useState(true)
    
    

  return (
    <div>
       <section>
      <div className={`bg-aliceBlue min-h-[450px] ${open ? 'w-72' : 'w-16'} top-[144px] duration-500 text-blue `}>
        <div className='py-3 flex justify-end'>
          <AiOutlineMenu size={26} className='cursor-pointer text-black' onClick={() => setOpen(!open)} />
        </div>
        <div className='flex flex-col mt-4 gap-4 relative'>
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              onClick={() => setSelectedMenu(i)}
              className={` ${menu.margin && 'mt-5'} group flex items-center text-sm gap-3.5 font-medium pl-6 pt-4 rounded-md text-blue 
              `}
              
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{ transitionDelay: `${i + 0.5}00ms` }}
                className={`whitespace-pre duration-500 ${!open && 'opacity-0 tranxlate-x-28 overflow-hidden'}  ${selectedMenu === i ? 'text-blue' : 'text-black' } ${
                  selectedMenu === i && 'border-b-2'
                }`}
              >
                {menu?.name}
              </h2>

              {menu.name === 'logout' ? (
                <button className={` ${open && 'hidden'} absolute left-48 bg-white font-semibold rounded-md drop-shadow-lg px-0 py-0 whitespace-pre text-gray-800 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit` }>
                  {menu?.name}
                </button>
              ) : (
                <h2
                  className={` ${open && 'hidden'} absolute left-48 bg-white font-semibold rounded-md drop-shadow-lg px-0 py-0 whitespace-pre text-gray-800 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit` }
                >
                  {menu?.name}
                </h2>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
