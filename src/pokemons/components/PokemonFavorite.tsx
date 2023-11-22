'use client'
import React, { useState } from 'react'
import { PokemonsGrid } from './PokemonsGrid'
import { useAppSelector } from '@/store'
import { PokemonCard } from './PokemonCard'
import { IoHeartOutline } from 'react-icons/io5'

export const PokemonFavorite = () => {
    const pokemon=useAppSelector(state=>Object.values(state.pokemons).map(data=>({id:`${data.id}`,name:data.name})));
    const [pokemons, setPokemons] = useState(pokemon);



    
  return (
    <div className="flex flex-wrap items-center justify-center gap-20" >
    {
       pokemon.length? (pokemons.map(data=>(

        <PokemonCard key={data.id} pokemon={data}/>)))
        :(<NotFavorites/>)
    }
</div>
  )
}

export const NotFavorites=()=>{
  return(
    <div className='flex flex-col h-[50vh] items-center justify-center'>

      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>

    </div>
  )
} 