import React from 'react';
import { Link } from 'react-router';

class PokemonIndexItem extends React.Component {

  render() {
    const {pokemon} = this.props;
    return (
      <li>
        <Link to={`pokemon/${pokemon.id}`}>
          {pokemon.name}
          <img src={pokemon.image_url} height='30' width='30' ></img>
        </Link>
      </li>
    )
  }

}


export default PokemonIndexItem;
