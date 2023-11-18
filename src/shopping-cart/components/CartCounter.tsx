'use client'
import React, { FC, useState } from 'react'


interface Props{
    value?:number,
}
export const CartCounter:FC <Props> = ({value=0}) => {
    const [counter, setCounter] = useState(value)
  return (
    <>
        <span className="text-9xl">{counter}</span>
      <div className="flex justify-center items-center mr-2" >
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
         onClick={()=>setCounter(old=>old+1)}
        >
          +1
        </button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
         onClick={()=>setCounter(old=>Math.max(old-1,0))}
        >
          -1
        </button>
      </div>
    </>
  )
}
