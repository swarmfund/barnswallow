import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

//const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const configureStore = preloadedState => {
  const store = createStore(rootReducer, composeWithDevTools(
      applyMiddleware(thunk)
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store;

};

export default configureStore