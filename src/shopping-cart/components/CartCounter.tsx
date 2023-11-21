'use client'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/index';
import { addOne, initCounterState, resetCount, substractOne } from '@/store/counter/counterSlice';


interface Props{
    value?:number,
}

export interface CounterResponse{
  method:string;
  count:number;
}

const getApiCounter=async():Promise<CounterResponse>=>{
  const data =await fetch('/api/counter').then(res=>res.json());
  return data
} 

export const CartCounter:FC <Props> = ({value=0}) => {
  const {count}=useAppSelector(state=>state.counterReducer); 
  const dispatch=useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [])

    useEffect(() => {
      getApiCounter().then( ({count})=>dispatch(initCounterState(count)))

  }, [dispatch])


  return (
    <>
        <span className="text-9xl">{count}</span>
      <div className="flex justify-center items-center mr-2" >
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
         onClick={()=>dispatch(addOne())}
        >
          +1
        </button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
         onClick={()=>dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  )
}
