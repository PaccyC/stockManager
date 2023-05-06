import React from 'react';
import { useLogout } from '../hooks/useLogout';

import Footer from './Footer';
function Logout() {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='h-[800px] w-[100%] relative'>
      <section className='relative w-[654px] h-[500px] mx-auto top-28 bg-aliceBlue rounded-[20px] shadow-md bg-opacity-25'>
        <h2 className='text-center text-blue font-semibold text-2xl py-6'>Logout</h2>
        <div className='bg-lightRed w-[400px] h-[100px] mx-auto rounded-md text-center mb-6'>
          <p className='py-6 px-3 text-left'>
            <span style={{ display: 'block' }}>To logout first confirm it with registering your </span> username and password.
          </p>
        </div>
        <form onSubmit={handleLogout} className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-[400px]'>
              <label className='Inter font-normal font-500 text-black text-[20px]'>Username</label>
              <input type='text' className='w-full h-[60px] bg-white border-2 border-s border-[#A9A9A9] rounded-[20px]' />
            </div>
            <div className='w-[400px] mt-6'>
              <label className='Inter font-normal font-500 text-black text-[20px]'>Password</label>
              <input type='password' className='w-full h-[60px] bg-white border-2 border-s border-[#A9A9A9] rounded-[20px]' />
            </div>
          </div>
          <button
            className='absolute w-[150px] h-[50px] bg-[#FC4345] rounded-[15px] font-500 text-[20px] font-normal right-32 bottom-6'
            onClick={handleLogout}
          >
            Logout
          </button>
        </form>
      </section>
      
  <Footer/>
      
    </div>
  );
}
export default Logout;