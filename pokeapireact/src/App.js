import './App.css';
import { Fragment, useState } from 'react';
import { PokemonCard } from './components/PokemonCard';
import { useFetchPokemons } from './hooks/useFetchPokemons';

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const dataPokemon = useFetchPokemons(url);
  console.log(dataPokemon);

  return (
    <Fragment>
      <h1>Hola mundo</h1>
      <PokemonCard />
    </Fragment>
  );
}

export default App;
