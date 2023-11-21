
import { PokemonsGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';





const getPokemon =async( limit=20,offset=0):Promise<SimplePokemon[]>=>{
  const data:PokemonsResponse=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res=>res.json());

  const Pokemons=data.results.map(Pokemon=>({
    id:Pokemon.url.split('/').at(-2)!,
    name:Pokemon.name
  }))

  // throw new Error("paso algo con la carga")

  return Pokemons;
}


export default async function PokemonPage() {

  const pokemons= await getPokemon(151);
  return (
    <div className="flex flex-col">
      <span  className="text-5xl my-2">Listado de pokemons <small className='text-blue-500'>estatico</small></span>

        <PokemonsGrid Pokemon={pokemons}/>
     
      
    </div>
  );
}