import React from 'react'
import messages from '../images/messages.svg'
import whatsApp from '../images/whatsapp.png'
function Footer() {
  return (
    <div className='absolute bottom-0 left-0 right-0 mx-auto w-[800px] h-[130px] bg-aliceBlue rounded-[15px] flex flex-col justify-center items-center'>
    <h2 className='text-blue font-400 text-xl text-center Inter py-3'>
      Contact Our Team
    </h2>
    <div className='flex flex-row'>
      <img src={messages} className='pr-4 pb-3'/>
      <p>stockm@gmail.com</p>
    </div>
    <div className='flex flex-row'>
      <img src={whatsApp} className='pr-4'/>
      <p>stockm@gmail.com</p>
    </div>
  </div>
    )
}

export default Footer
