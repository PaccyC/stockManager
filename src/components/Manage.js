import React from 'react'

function Manage() {
  return (
    <form>
      <div className='relative mx-24 w-[750px] h-[570px] bg-aliceBlue left-72 top-28 rounded-[20px] flex flex-col justify-center'>
        <h1 className='text-center mb-6 text-blue Inter font-normal text-3xl'>Manage</h1>
        <div className='flex flex-col items-center'>
          <div className='text-start'>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Name:</label>
            <input type='text' className='w-[350px] h-[50px] bg-white border-2 border-nobel rounded-[15px] focus:border-nobel' />
          </div>

          <div className='text-start '>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Manufactured Date:</label>
            <input type='date' className='w-[350px] h-[50px] text-[25px] text-center border-2 border-nobel rounded-[15px] hover:border-nobel' />
          </div>
          <div className='text-start '>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Expired Date:</label>
            <input type='date' className='w-[350px] h-[50px] text-[25px] text-center border-2 border-nobel rounded-[15px] hover:border-nobel' />
          </div>
          <div className='text-start '>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Unit price:</label>
            <input type='number' className='w-[350px] h-[50px] text-[25px] text-center border-2 border-nobel rounded-[15px] hover:border-nobel' />
          </div>
        </div>
         <button className=' absolute text-black bg-blue h-[60px] w-[100px] rounded-[15px] text-2xl right-[200px] bottom-3'>Save</button>
     
      </div>
    </form>
  )
}

export default Manage