
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import logo from '../images/logo.svg'
import googgle from '../images/google.png'

export default function Signup() {
  const [username,setUsername]=useState('');
   const [firstName,setFirstname]=useState('');
   const [lastName,setLastname]=useState('');
      const [phoneNumber,setPhoneNumber]=useState('');
      const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(firstName,lastName,phoneNumber,username,email,password)
  }
   
 

 
  return (
<div className='relative mx-24 w-[850px] h-[750px] left-72 top-32 bg-aliceBlue text-center rounded-[20px]'>
  <img className='mx-auto text-center space-y-12' src={logo} alt=''/>
  <h1 className='mx-auto space-y-12 text-blue Inter font-normal text-4xl text-center mb-6'>
    Create Account
    </h1>

    <form onSubmit={handleSubmit}>

      <div className='grid grid-cols-2 grid-rows-3 gap-x-20 gap-y-7'>
      <div>
    <label className='Inter font-300 font-[25px]  text-black space-y-6 mb-4 pl-8 float-left'>First Name</label>
    <input type='text' className='w-[300px] h-[50px] bg-white border-2 border-nobel rounded-[20px] focus:border-nobel' 
    onChange={(e)=>setFirstname(e.target.value)}
    value={firstName}
    />
    </div>
    <div>
    <label className='Inter font-300 font-[25px] text-center text-black mb-4 space-y-6 pl-8 float-left'>Last Name</label>
    <input type='text' className='w-[300px] h-[50px] bg-white border-2 border-nobel rounded-[20px] focus:border-nobel'
        onChange={(e)=>setLastname(e.target.value)}
    value={lastName}
    />
    
    </div>
      <div>
    <label className='Inter font-300 font-[25px] text-center text-black mb-4 space-y-6 pl-8 float-left'>Email Address</label>
    <input type='email' className='w-[300px] h-[50px] bg-white border-2 border-nobel rounded-[20px] focus:border-nobel'
        onChange={(e)=>setEmail(e.target.value)}
    value={email}
    />
    
    </div>
  
        <div>
    <label className='Inter font-300 font-[25px] text-center text-black mb-4 space-y-6 pl-8 float-left'>Phone Number</label>
    <input type='phone' className='w-[300px] h-[50px] bg-white border-2 border-nobel rounded-[20px] focus:border-nobel'
     onChange={(e)=>setPhoneNumber(e.target.value)}
    value={phoneNumber}
    />
    </div>
    <div>
    <label className='Inter font-300 font-[25px] text-center text-black mb-4 pl-8 float-left'>Username</label>
    <input type='text' className='w-[300px] h-[50px] bg-white border-2 border-nobel rounded-[20px] focus:border-nobel'
     onChange={(e)=>setUsername(e.target.value)}
    value={username}
    />
    </div>
    <div>
    <label className='Inter font-300 font-[25px] text-center text-black mb-4 pl-8 float-left'>Password</label>
    <input type='password' className='w-[300px] h-[50px] bg-white border-2 border-nobel rounded-[20px] focus:border-nobel'
     onChange={(e)=>setPassword(e.target.value)}
    value={password}
    />
    </div>
    
    </div>
    <button  className='w-[200px] h-[60px] bg-[rgb(102,136,255)] rounded-[20px] text-white font-[30px] text-center line-[36px] Inter mx-auto mt-8' disabled={isLoading}>SIGN UP</button>

  <button className='w-[600px] h-[80px] bg-white rounded-[20px] mx-auto text-black font-normal font-4xl mt-6 flex items-center justify-center'>
    {error && <div className='w-[300px] h-[40px] border-red-500 bg-white text-red-500'>{error}</div>}
  <img src={googgle} alt='' className='mr-4'/>
  Sign up with Google
</button>
    </form>
</div>
  )
}
