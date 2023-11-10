import Link from "next/link"
import { FC } from "react"



interface Props{
    path:string,
    title:string,
    icon:JSX.Element,
    subtitle:string,
}

export const SideBarMenuItem:FC <Props> = ({path,icon,title,subtitle}) => {
  return (
    <Link href={path} className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150">
        <div>
        {
            icon
        }
            
        </div>
        <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-white">{title}</span>
            <span className="text-sm text-white/50 hidden md:block">{subtitle} </span>
        </div>
    </Link>
  )
}
