import React from 'react';


class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const {pokemon} = this.props;
    console.log(pokemon);
    return (<ul>
       {pokemon.map(poke =>
        (
        <li>{poke.id} {poke.name}
          <img src={poke.image_url} height='30' width='30'></img>
        </li>
        )
      )}
    </ul>)
  }

}

export default PokemonIndex;
