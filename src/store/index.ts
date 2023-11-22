import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice";
import pokemonReducer from "./pokemon/pokemons";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { localStorageMiddleware } from './middlewares/locaStorage-middlewares';


export const store = configureStore({
  reducer: {
    counterReducer,
    pokemons:pokemonReducer,
  },
  middleware:(getDefoultMiddleware)=>getDefoultMiddleware()
  .concat(localStorageMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector