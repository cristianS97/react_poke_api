import React, { Fragment, useState } from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemon';

export const PokemonCard = ({pokemon}) => {
  const dataPokemon = useFetchPokemon(pokemon.url);
  const {loading, pokemon:pokemonFetch} = dataPokemon;
  const [imageId, setImageId] = useState(0);

  const cambiarImagen = () => {
    if(imageId === 0) {
      setImageId(1);
    } else {
      setImageId(0);
    }
  }
  
  return <Fragment>
    {loading
      ?
      <div className="card mb-2" style={{width: 'calc(25% - 10px)'}}>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      : 
      <div className="card mb-2" style={{width: 'calc(25% - 10px)'}}>
        <img src={pokemonFetch.images[imageId]} className="card-img-top" alt={pokemonFetch.name}/>
        <div className="card-body">
          <h5 className="card-title">({pokemonFetch.id}) {pokemonFetch.name}</h5>
          <p className="card-text">Types: {pokemonFetch.types.join(', ')}</p>
          <button className="btn btn-primary" onClick={cambiarImagen}>{imageId === 0 ? 'Shiny' : 'Normal'}</button>
        </div>
      </div>
    }</Fragment>;
}
