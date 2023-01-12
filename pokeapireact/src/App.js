import './App.css';
import { Fragment, useState } from 'react';
import { PokemonGrid } from './components/PokemonGrid';
import { useFetchPokemons } from './hooks/useFetchPokemons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const {data, loading, nextUrl, previousUrl} = useFetchPokemons(url);

  return (
    <Fragment>
      <div className='container'>
        <h1>Pokedex</h1>
        <button
          className="btn btn-success me-2 ms-2"
          disabled={previousUrl === null && 'disabled'}
          onClick={() => setUrl(previousUrl)}
          >
            Página anterior
          </button>
        <button
          className="btn btn-success"
          disabled={nextUrl === null && 'disabled'}
          onClick={() => setUrl(nextUrl)}
          >
            Siguiente página
          </button>
        </div>

      {loading
      ?
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      :
      <div className='container'>
        <PokemonGrid pokemons={data} />
      </div>
      }
    </Fragment>
  );
}

export default App;
