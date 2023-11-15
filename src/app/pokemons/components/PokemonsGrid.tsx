import React, { FC } from 'react'
import { PokemonCard, SimplePokemon } from '..'

interface Props{
    Pokemon:SimplePokemon[]
}


export const PokemonsGrid:FC <Props> = ({Pokemon}) => {
  return (

    <div className="flex flex-wrap items-center justify-center gap-20" >
            {
                Pokemon.map(pokemon=>(
                // <Image
                //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                //     width={100}
                //     height={100}
                //     alt={pokemon.name}
                //     key={pokemon.id}
                //     />
                //     ))
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>))
            }
    </div>
  )
}
