import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const {pokemon} = this.props;
    return (
    <section className="pokedex">
      <ul>
         {pokemon.map((poke, idx) =>
          <PokemonIndexItem key={idx} pokemon={poke}/>
          )}
      </ul>

      <section>
        {this.props.children}
      </section>

    </section>)
  }

}

export default PokemonIndex;
