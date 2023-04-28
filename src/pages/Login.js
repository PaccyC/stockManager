import React from 'react'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin';
import {Icon} from 'react-icons-kit'
import {eyeOff}from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'


export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {login}=useLogin();

  const handleSubmit= async(e)=>{
   e.preventDefault();

  await  login(email,password);
}
const [type,setType]=useState('password');
const [icon,setIcon]=useState(eyeOff);

const handleToggle=()=>{
  if(type==='password'){
  setIcon(eye);
  setType('text');
  }
  else{
    setIcon(eyeOff);
    setType('password');
  }
}
  return (
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <div className='flex'>
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
        </div>
        <div className="mt-2">
          <input  type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className='w-full  relative'>
        <div className="mt-2  p-4 w-full ">
          <input  type={type} className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  bg-transparent outline-none border-hidden h-10"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}/>
        </div> 
        <div className='text-2xl absolute top-4 right-5'>
          <Icon icon={icon} onClick={handleToggle} />
        </div>
        </div>
       
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SIGN IN</a>
    </p>
  </div>
</div>
    
  )
}
