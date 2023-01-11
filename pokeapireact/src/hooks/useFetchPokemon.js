
export const useFetchPokemon = (url) => {
    fetch(url).then(response => response.json()).then(data => {
      aux.push({
        'id': data.id,
        'name': data.name,
        'images': [data.sprites.front_default, data.sprites.front_shiny],
        'types': data.types.map(type => type.type.name)

      })
    });
}
