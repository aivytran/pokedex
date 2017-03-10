import { RECEIVE_ALL_POKEMON, POST_NEW_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = merge({}, state, action.pokemon);
      return newState;
    case POST_NEW_POKEMON:
      const newState1 = merge({}, state, action.pokemon);
      return newState1;
    default:
      return state;
  }


}

export default pokemonReducer;
