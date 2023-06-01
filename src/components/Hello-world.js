import React from 'react'
import { useState } from 'react'
function Hello_world() {
    const [counter,setCounter]=useState(1)
    const data=[
        {names:"Paccy"},
        {names:"Viateur"},
        {names:"Konde"}
    ]
  return (
    <div>
      <h1 className='text-center text-3xl'>Counter :<p className='text-red-400'>{counter}</p></h1>

      {data && data.map((item)=>(
        <div key={item.names}>
            <h1>{item.names}</h1>
            </div>
      ))}

      
    </div>
  )
}

export default Hello_world
