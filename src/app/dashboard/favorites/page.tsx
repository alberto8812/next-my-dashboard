
import { PokemonFavorite, PokemonsGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import { IoHeartOutline } from 'react-icons/io5';


export const metadata = {
 title: 'Favoritos',
 description: 'ad minim',
};



export default async function PokemonPage() {


  return (
    <div className="flex flex-col">
      <span  className="text-5xl my-2">Pokemon favoritos<small className='text-blue-500'>estatico</small></span>

        <PokemonFavorite/>
     
      
    </div>
  );
}


