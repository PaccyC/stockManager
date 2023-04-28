import React from 'react'
import Logo from '../images/logo2.png'
import {useAuthContext} from '../hooks/useAuthContext'

import { Link } from 'react-router-dom';
export default function Navbar() {
  const {user}=useAuthContext();
  return (
    <div className='navbar flex justify-between  bg-sky-400 h-24 items-center p-8'>
        <div className='font-bold '>
          <img src={Logo} alt='' className='h-24'/>
        </div>
        {!user && (

        <div className='links flex space-x-6 text-white cursor-pointer'>
            
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
        

        </div>
        )}
    </div>
  )
}
