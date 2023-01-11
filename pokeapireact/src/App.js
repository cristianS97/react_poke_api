import './App.css';
import { Fragment, useState } from 'react';
import { PokemonGrid } from './components/PokemonGrid';
import { useFetchPokemons } from './hooks/useFetchPokemons';

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const {error, data, loading, nextUrl, previousUrl} = useFetchPokemons(url);

  return (
    <Fragment>
      <h1>Hola mundo {previousUrl}</h1>
      <button disabled={previousUrl === null && 'disabled'} onClick={() => setUrl(previousUrl)}>Página anterior</button>
      <button onClick={() => setUrl(nextUrl)}>Siguiente página</button>
      {loading ? 'Cargando...' : <PokemonGrid pokemons={data} />}
    </Fragment>
  );
}

export default App;
