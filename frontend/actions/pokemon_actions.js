import {fetchAllPokemon} from '../util/api_util';
import {fetchSinglePokemon} from '../util/api_util';
import {postPokemon} from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const POST_NEW_POKEMON = "POST_NEW_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})


export const requestAllPokemon = () => (dispatch) => {
 return fetchAllPokemon()
   .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
}

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
})


export const requestSinglePokemon = (id) => (dispatch) => {
 return fetchSinglePokemon(id)
   .then(pokemon => dispatch(receiveSinglePokemon(pokemon)));
}

export const postNewPokemon = pokemon => ({
  type: POST_NEW_POKEMON,
  pokemon
})

export const createPokemon = (options) => (dispatch) => {
 return postPokemon(options)
   .then(pokemon => dispatch(postNewPokemon(pokemon)));
}
