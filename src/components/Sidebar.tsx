import Image from 'next/image'
import React from 'react'
import { IoLogoReact,IoBrowsersOutline, IoCalculator  } from 'react-icons/io5';
import { CgPokemon } from "react-icons/cg";
import { SideBarMenuItem } from '.';


const meneItems=[
    {
        path:'/dashboard/main',
        icon:<IoBrowsersOutline size={40}/>,
        title:'Dasboard',
        subtitle:'Visualizacion'
    },
    {
        path:'/dashboard/counter',
        icon:<IoCalculator size={40}/>,
        title:'Counter',
        subtitle:'Counter client side'
    },
    {
        path:'/dashboard/pokemon',
        icon:<CgPokemon  size={40}/>,
        title:'Pokemon',
        subtitle:'Pokemon page '
    },
    {
        path:'/dashboard/favorites',
        icon:<CgPokemon  size={40}/>,
        title:'Pokemon favorito',
        subtitle:'Pokemon favorito page '
    },
]


export const Sidebar = () => {
  return (
    <div id="menu"
    style={{width:'400px'}}
    className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll">

    <div id="logo" className="my-4 px-6">
     <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
        <IoLogoReact className='mr-2'/>
        <span>Dash</span> 
        <span className="text-blue-500">8</span>.
    </h1>
     <p className="text-slate-500 text-sm">Manage your actions and activities</p>
    </div>
    <div id="profile" className="px-6 py-10">
     <p className="text-slate-500">Welcome back,</p>
     <a href="#" className="inline-flex space-x-2 items-center">
         <span>
             <Image className="rounded-full w-8 h-8"   
             src="https://media.licdn.com/dms/image/D4E03AQG0O5Inf4qoUw/profile-displayphoto-shrink_200_200/0/1665249694210?e=1704931200&v=beta&t=LES6YXKNjFJ9YOPK3qAfuXe4U3l1EHrHoy7J5cjaVNM" 
             alt="User avatar"
             width={50}
             height={50} 
             />
         </span>
         <span className="text-sm md:text-base font-bold">
             Carlos Velasco
         </span>
         </a>
    </div>
    <div id="nav" className="w-full px-6">

        {
            meneItems.map(itemdash=>(<SideBarMenuItem  {...itemdash} key={itemdash.path}/>))
        }

     
    </div>
 </div>
  )
}
