import React from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore'
import App from './containers/App';
import './index.css';


const store = configureStore();
//store.dispatch();

console.log(store.getState());

render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
);

