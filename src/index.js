import React from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
//import axiosMiddleware from 'redux-axios-middleware';
import configureStore from './store/configureStore'
import App from './containers/App';
import './index.css';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});



const store = configureStore();

//store.dispatch();

console.log(store.getState());

//const store = createStore(postReducer);
render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
);

