
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

export default function Signup() {
  const [username,setUsername]=useState('');
  const [age,setAge]=useState(0);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username,age,email, password)
  }
   
 

 
  return (

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">CREATE ACCOUNT</h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
          <div className='flex '>
          <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">Username</label>
          </div>
          <div className="mt-2">
            <input type="text"   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>setUsername(e.target.value)}
              value={username}/>
          </div>
        </div>
        <div>
          <div className='flex '>
          <label htmlFor="age" className="block text-sm font-semibold leading-6 text-gray-900">Age</label>
          </div>
          <div className="mt-2">
            <input type="number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>setAge(e.target.value)}
              value={age}/>
          </div>
        </div>

       
 

        <div>
          <div className='flex '>
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
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
        
          </div>
          <div className="mt-2">
            <input type="password"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}/>
          </div>
        </div>
  
        <div>
          <button type="submit" disabled={isLoading} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>

        {error && <div className='text-red-400 h-7 w-52 border-red-400'>{error}</div>}
      </form>
  
      <p className="mt-10 text-center text-sm text-gray-500">
       Already have an account?
        <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SIGN IN</a>
      </p>
    </div>
  </div>
  )
}
