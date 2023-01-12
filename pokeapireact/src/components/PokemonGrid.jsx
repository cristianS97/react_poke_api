import React, { Fragment } from 'react';
import { PokemonCard } from './PokemonCard';

export const PokemonGrid = ({pokemons}) => {
  return <Fragment>
    <h3>Lista de pokemons</h3>

    <div className="d-flex flex-wrap justify-content-between">
      {pokemons.map((pokemon, idx) => (
        <PokemonCard key={idx} pokemon={pokemon}/>
      ))}
    </div>

  </Fragment>;
}
