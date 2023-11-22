'use client'
import Link from 'next/link'
import React, { FC } from 'react'
import { SimplePokemon } from '..'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemon/pokemons'


interface Props{
    pokemon:SimplePokemon
}

export const PokemonCard:FC <Props> = ({pokemon}) => {
    const {name,id}=pokemon;
    const dispatch=useAppDispatch()
    
    const isfavorite=useAppSelector(state=>!!state.pokemons[id])

    const onToggle=()=>{
        dispatch(toggleFavorite(pokemon))
    }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="text-center p-6 bg-gray-800 border-b flex items-center justify-center flex-col">
                    <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width={100}
                    height={100}
                    alt={pokemon.name}
                    key={pokemon.id}
                    priority={false}
           
                    />


                    <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
           
                    <div className="mt-5">
                        <Link
                         href={`/dashboard/pokemons/${ name }`}
                        className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                        Mas informacion
                        </Link>
                    </div>
                    </div>
                    <div className="border-b">
                        <div  
                        className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                        onClick={onToggle}
                        >
                        
                                <div className="text-red-600">
                                    {
                                        isfavorite? <IoHeart/>:<IoHeartOutline/>
                                    }
                                    {/* <IoHeartOutline/> */}
                                   
                                </div>
                                <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                   {
                                    isfavorite?
                                    'Es favorito':
                                    'No es favorito'
                                   }
                                </p>
                                <p className="text-xs text-gray-500">View your campaigns</p>
                                </div>
                        
                        </div>

                    </div>

                  
                </div>
            </div>
  )
}
