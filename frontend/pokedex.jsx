import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {fetchAllPokemon} from './util/api_util.js';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {selectAllPokemon} from './reducers/selector.js';
import Root from './components/root.jsx';

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
