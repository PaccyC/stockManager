import React, { useState } from 'react';
import { useLogout } from '../hooks/useLogout';
import MenuDropDown from './MenuDropDown';
import Navbar from './Navbar';
import Footer from './Footer';

function Logout() {
  // Input states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = { username, password };

  const { logout } = useLogout();

  const [loggedIn, setLoggedIn] = useState(false);

  const matches = async () => {
    try {
      // Make an API call to check the credentials
      const response = await fetch('/api/checkCredentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // Pass the username and password
      });

      if (response.ok) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false); 
      }
    } catch (error) {
      console.error('Error:', error);
      setLoggedIn(false);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();

    if (loggedIn) {
      logout();
    }
  };

  return (
    <>
      <Navbar />
      <MenuDropDown />
      <div className='absolute h-[800px] w-[1235px] left-96 top-48 '>
        <section className='absolute w-[654px] h-[500px] bg-aliceBlue rounded-[20px] shadow-md bg-opacity-25'>
          <h2 className='text-center text-blue font-semibold text-2xl py-6'>Logout</h2>
          <div className='bg-lightRed w-[400px] h-[100px] mx-auto rounded-md text-center mb-6'>
            <p className='py-6 px-3 text-left'>
              <span style={{ display: 'block' }}>To logout, first confirm it by entering your </span>username and password.
            </p>
          </div>
          <form onSubmit={()=> matches() && handleLogout()} className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <div className='w-[400px]'>
                <label className='Inter font-normal font-500 text-black text-[20px]'>Username</label>
                <input
                  type='text'
                  className='w-full h-[60px] bg-white border-2 border-s border-[#A9A9A9] rounded-[20px]'
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div className='w-[400px] mt-6'>
                <label className='Inter font-normal font-500 text-black text-[20px]'>Password</label>
                <input
                  type='password'
                  className='w-full h-[60px] bg-white border-2 border-s border-[#A9A9A9] rounded-[20px]'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <button
              className='absolute w-[150px] h-[50px] bg-[#FC4345] rounded-[15px] font-500 text-[20px] font-normal right-32 bottom-6 cursor-pointer'
            >
              Logout
            </button>
          </form>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Logout;
