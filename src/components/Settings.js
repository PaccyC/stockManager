import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MenuDropDown from './MenuDropDown';
import { BsSun } from 'react-icons/bs';
import { WiMoonAltWaningGibbous6 } from 'react-icons/wi';
import {IoMdDesktop} from 'react-icons/io'

function Settings() {
const [mode,setMode]=useState(
localStorage.getItem("theme")?localStorage.getItem("theme"):"system"

);
const element=document.documentElement
const darkQuery=window.matchMedia("(prefers-color-scheme: dark)")
  const options=[
    {
      icon:BsSun,
      text:"light"
    },
    {
      icon:WiMoonAltWaningGibbous6,
      text:"dark"
    },
    {
      icon:IoMdDesktop,
      text:"system"
    }
  ]

  function onWindowMatch(){
    if(localStorage.mode ==="dark"
    
    || (!("mode" in localStorage) && darkQuery.matches)){
      element.classList.add('dark');

    }
    else{
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
         
  useEffect(()=>{
    switch(mode){
      case 'dark':
        element.classList.add("dark")
        localStorage.setItem("theme","dark")
        break;

        case 'light':
        element.classList.remove("dark")
        localStorage.setItem("theme","light")
        break; 
        default:
          localStorage.removeItem("theme")
          onWindowMatch();
          break 

    }
  },[mode,element.classList])
 darkQuery.addEventListener('change',(e)=>{
  if(!("theme" in localStorage)){
    if(e.matches){
      element.classList.add("dark");
    }
    else{
      element.classList.remove("dark");
    }
  }
 })
  return (
    <main>
      <Navbar />
      <MenuDropDown />

      <div className={`absolute bg-white w-[1235px] h-[70vh] left-72 top-36 dark:text-gray dark:bg-slate-900`}>
        <h2 className="text-2xl font-semibold text-left pl-6">Theme</h2>

        <div className="flex flex-row justify-around">
         <div className='top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100'>
          {options.map(opt=>(

          <button key={opt.text} className={`w-8 h-8 leading-9 text-xl rounded-full m-1
          ${mode === opt.text && "text-sky-600"}
          `}
          onClick={()=>setMode(opt.text)}
          >
         {React.createElement(opt.icon)}
          </button>
          ))}  
         </div>
        </div>
        
      </div>
    </main>
  );
}

export default Settings;