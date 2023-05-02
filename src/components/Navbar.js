import React from 'react'

import logo from '../images/logo.svg'
import {useAuthContext} from '../hooks/useAuthContext'

export default function Navbar() {
  const {user}=useAuthContext();
  return (
   <div className='w-[100%] h-[144px] left-0 top-0 bg-aliceBlue border-2 border-s-silver'>
 <img src={logo}/>
</div>
  )
}
