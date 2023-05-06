import React from "react"

import MenuDropDown from "../components/MenuDropDown"
import Navbar from "../components/Navbar"
import Logout from "../components/Logout"
import Manage from '../components/Manage'
import Stock from "../components/Stock"
export default function Home() {


  return (
    <>
   <Navbar/>
    <MenuDropDown/>
    {/* <Manage/> */}
    {/* <Logout/> */}
    <Stock/>
    </>
  )
}