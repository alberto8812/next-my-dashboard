import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware=(state:MiddlewareAPI)=>{
    //funcion dentro de una funcion que queremos ejecutar
    return(next:Dispatch)=>(action:Action)=>{
        //middleware que intersetta cualquier accion con el estage 
        next(action);
        console.log(action)
        if(action.type==='pokemons/toggleFavorite'){
            const {pokemons}=state.getState()  as RootState;
            localStorage.setItem('favorite-pokemon',JSON.stringify(pokemons));
            return;
        }

    }
}