import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';


const pokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      const newState = merge({}, state, action.pokemon);
      return newState;
    default:
      return state;
  }
}

export default pokemonDetailReducer;
