'use client'
import { SimpleWidget } from './SimpleWidget'
import {useAppSelector } from '@/store'
import { LuShoppingCart } from "react-icons/lu";

export const WigetsGrid = () => {

    const {count}=useAppSelector(state=>state.counterReducer);

  return (
    <div className="flex flex-wrap  p-2 ml-2">
    <SimpleWidget  
    label='Contador' 
    title={`${count}`} 
    icon={<LuShoppingCart size={30} className="text-blue-500 mr-2" />}
    subTitle='Productos agregados'

    />      
   </div>
  )
}
