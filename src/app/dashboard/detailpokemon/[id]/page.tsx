import { DetailPokemon } from "@/pokemons";
import { Metadata } from "next";


interface Props{
    params:{id:string};
}


export async function generateMetadata({params}:Props):Promise <Metadata>{
    const {name,id}= await getPokemon(params.id)


    return {
        title:`${id}-${name}`,
        description:`pagina del pokemon ${name}`,
    }
}

const getPokemon= async(id:string):Promise<DetailPokemon>=>{

  const data:DetailPokemon= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,
  {
    cache:'force-cache'
  }
  ).then(res=>res.json())
  

  return data;

}


export default async function PokemonDetailPage({params}:Props) {
    const {id}=params;
    const pokemon= await getPokemon(id)
    
   
  return (
    <div>
      <h1>{pokemon.name}</h1>

    </div>
  );
}