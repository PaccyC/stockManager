import React from "react"
import MenuDropDown from "../components/MenuDropDown"

import Navbar from "../components/Navbar"

import Dashboard from "../components/Dashboard"

export default function Home() {

  return (
   <section className="relative w-full h-[100vh]">
    
    <Navbar/>
   <MenuDropDown/>
   <Dashboard/>
   </section>

   
  )
}