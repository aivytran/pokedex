import {connect} from 'react-redux';
import PokemonForm from './pokemon_form';
import {createPokemon} from './../../actions/pokemon_actions';



const mapDispatchToProps = dispatch => ({
  createPokemon: (options) => dispatch(createPokemon(options))
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
