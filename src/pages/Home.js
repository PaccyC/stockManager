import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'

export default function Home() {
  const menus = [
    { name: 'dashboard', link: '/', icon: MdOutlineDashboard },
    { name: 'notifications', link: '/', icon: IoMdNotificationsOutline },
    { name: 'settings', link: '/', icon: FiSettings },
    { name: 'profile', link: '/', icon: AiOutlineUsergroupAdd, margin: true },
    { name: 'dashboard', link: '/', icon: MdOutlineDashboard },
    { name: 'logout', link: '/', icon: FiLogOut },
  ]

  const {logout}=useLogout()

  const [open, setOpen] = useState(true)

  const handleLogout = () => {
  logout();
  }

  return (
    <section>
      <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 `}>
        <div className='py-3 flex justify-end'>
          <HiMenuAlt3 size={26} className='cursor-pointer' onClick={() => setOpen(!open)} />
        </div>
        <div className='flex flex-col mt-4 gap-4 relative'>
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu.margin && 'mt-5'} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${!open && 'opacity-0 tranxlate-x-28 overflow-hidden'}`}
              >
                {menu?.name}
              </h2>

              {menu.name === 'logout' ? (
                <button onClick={handleLogout} className={` ${open && 'hidden'} absolute left-48 bg-white font-semibold rounded-md drop-shadow-lg px-0 py-0 whitespace-pre text-gray-800 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit` }>
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
  )
}