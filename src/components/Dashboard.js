import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'   
import MenuDropDown from './MenuDropDown'

function Dashboard(){
  return (

   <>
     <Navbar/>
   <MenuDropDown/>
   <section className='absolute w-[1235px] h-[100vh] top-36 left-72'>
   <h1 className='text-center font-500 text-3xl text-[#0029FF]'>Recent transaction</h1>
   <div>
    <table className='mx-auto'>
      <tbody>
        <tr>
          <th className='pr-24 pt-8'>Name</th>
          <th className='pr-24 pt-8'>Quantity</th>
          <th className='pr-24 pt-8'>Total Price</th>
          <th className='pr-24 pt-8'>Transaction Date</th>
        </tr>

      </tbody>
    </table>

   </div>
   <Footer/>
   </section>
   </>
  )
}

export default Dashboard
