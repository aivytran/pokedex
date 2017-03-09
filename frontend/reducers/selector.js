export const selectAllPokemon = ({pokemon}) => (
  Object.keys(pokemon).map(id => pokemon[id])
);
