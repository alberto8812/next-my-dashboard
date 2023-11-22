import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface PokemonState{
    [key:string]:SimplePokemon;
}

const getInitalstate=():PokemonState=>{

    if()
    const favortaies=JSON.parse(localStorage.getItem('favorite-pokemon')?? '{}')

    return favortaies
}


const initialState = {
   ...getInitalstate(),

}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
        toggleFavorite(state,action:PayloadAction<SimplePokemon>){

            const pokemon=action.payload;

            const {id}=pokemon;
            if(!!state[id]){
                delete state[id];
                return;
            }
            state[id]=action.payload;

        }

  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer