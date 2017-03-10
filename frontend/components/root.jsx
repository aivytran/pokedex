import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={PokemonIndexContainer} >
        <IndexRoute component={PokemonFormContainer}/>
        <Route path="pokemon/:pokemonId" component={PokemonDetailContainer}></Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
