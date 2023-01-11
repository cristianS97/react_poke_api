import { useState, useEffect } from "react";

export const useFetchPokemon = (url) => {
    const [pokemon, setPokemon] = useState({'loading': true,
    'pokemon': {
      'id': '',
      'name': '',
      'images': [],
      'types': []
    }
  });

    useEffect(() => {

      setPokemon({'loading': true,
        'pokemon': {
          'id': '',
          'name': '',
          'images': [],
          'types': []
        }
      });
      
      fetch(url).then(response => response.json()).then(data => {
        setPokemon({'loading': false,
          'pokemon': {
            'id': data.id,
            'name': data.name,
            'images': [data.sprites.front_default, data.sprites.front_shiny],
            'types': data.types.map(type => type.type.name)
          }
        });
      });
    }, []);

    return pokemon;
}
