import { useEffect, useState } from "react"

export const useFetchPokemons = (url) => {
    const [state, setState] = useState({
        data:[],
        loading: true,
        nextUrl: null,
        previousUrl: null
    });

    useEffect(() => {
      setState({
        data: [],
        loading: true,
        nextUrl: null,
        previousUrl: null
      });

      fetch(url).then(response => response.json()).then(pokemons => {
        const nextUrl = pokemons.next;
        const previousUrl = pokemons.previous;

        setState({
          data: pokemons.results,
          loading: false,
          nextUrl: nextUrl,
          previousUrl: previousUrl
        });

      });
    }, [url]);

    return state;
}
