import React from 'react'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin';
import logo from '../images/logo.svg'
import googgle from '../images/google.png'

export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {login}=useLogin();

  const handleSubmit= async(e)=>{
   e.preventDefault();

  await  login(email,password);
}

  return (
<div className='relative mx-24 w-[750px] h-[600px] bg-aliceBlue text-center left-72 top-32 rounded-[20px] flex flex-col justify-center'>
  <img className='mx-auto mb-5' src={logo} alt=''/>
  <h1 className='mx-auto mb-6 text-blue Inter font-normal text-4xl'>Log into your account</h1>
  <form onSubmit={handleSubmit} className='mx-auto'>

    <div className='flex flex-col items-center'>
      <div className='text-start'>
        <label className='block Inter font-300 font-[25px] text-black mb-3'>Email Address</label>
        <input type='email' className='w-[350px] h-[50px] bg-white border-2 border-nobel rounded-[20px] focus:border-nobel'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className='text-start '>
        <label className='block Inter font-300 font-[25px] text-black mb-3'>Password</label>
        <input type='password' className='w-[350px] h-[50px] text-[25px] text-center border-2 border-nobel rounded-[20px] hover:border-nobel' 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
    </div>
    
    <button className='w-[200px] h-[50px] bg-[#6688FF] rounded-[20px] font-600 text-2xl text-white  text-center line-[36px] Inter mx-auto mt-8'>LOGIN</button>

    <button className='w-[500px] h-14 bg-white rounded-[20px] mx-auto text-black font-normal font-4xl mt-6 flex items-center justify-center'>
      <img src={googgle} alt='' className='mr-4'/>
      Login with Google
    </button>
  </form>
</div>

  )
}
