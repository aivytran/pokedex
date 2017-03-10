import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId)
    }
  }

  render() {
    const {pokemon} = this.props;
    console.log(pokemon);
    return (
      <ul>
        <figure><img src={pokemon.image_url}></img></figure>
        <li>{pokemon.id}</li>
        <li>{pokemon.name}</li>
        <li>{pokemon.pokemon_id}</li>
        <li>{pokemon.price}</li>
        <li>{pokemon.happiness}</li>
      </ul>
    )
  }
}

export default PokemonDetail
