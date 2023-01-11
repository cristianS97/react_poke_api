import React from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemon';

export const PokemonCard = ({pokemon}) => {
  const dataPokemon = useFetchPokemon(pokemon.url);
  const {loading, pokemon:pokemonFetch} = dataPokemon;
  
  return <div>{loading ? <p>Cargando...</p> : <h2>({pokemonFetch.id}) {pokemonFetch.name}</h2>}</div>;
}
