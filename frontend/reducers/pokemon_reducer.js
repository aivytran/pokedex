import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const initialState = {
  pokemon: {
    1: {
      id: 1,
      name: "Bulbasaur",
      image_url: "/assets/pokemon_snaps/1-746592ddbf88f824b4897ee29c2e9018b6a88098e45136531eb45f46bb6f2e4e.svg"
    },
    2: {
      id: 2,
      name: "Ivysaur",
      image_url: "/assets/pokemon_snaps/2-82beb81d99fbd5b3e9122c1f3334850333cb314193e1352f28082ab00bf0c0e3.svg"
    }
  }
}

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = merge({}, state, action.pokemon);
      return newState;
    default:
      return state;
  }


}

export default pokemonReducer;
