import React from "react";
import './App.css'

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {breweriesReducer as reducer} from './reducers/breweriesReducer';

import BreweryForm from './components/BreweryForm';
import BreweriesList from './components/BreweriesList'

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <h1>🍺 🍺     Breweries     🍺 🍺</h1>
      <BreweryForm />
      <BreweriesList />
    </div>
    </Provider>
  );
}
