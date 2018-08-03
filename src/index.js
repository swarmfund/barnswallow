import React from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore'
import App from './containers/App';
import {addLedger, addTransaction} from './actions'
import './index.css';


const store = configureStore();

console.log(store.getState());

store.dispatch(addLedger("2f28cd10384d152220d401dc26b3e8852f579f7f688c52e697fe831ac8fc6ad9", "5", "2", "22 minutes ago"));

store.dispatch(addTransaction("2f28cd10384d152220d401dc26b3e8852f579f7f688c52e697fe831ac8fc6ad9", "19225497", "0.00001 XLM", "22 minutes ago"));
store.dispatch(addTransaction("d618329aa7cf78f304a220b42050be23790cd71dc51b2f20708c05798d34d5f8", "19225497", "0.00006 XLM", "22 minutes ago"));
store.dispatch(addTransaction("2c6c600630886a28a432fac1d42351b8ebc73e9bb2fd26542a7eb8b2716542f7", "19225497", "0.00001 XLM", "21 minutes ago"));
store.dispatch(addTransaction("c142ccb5b8af4838c77dd6fe622aa57747c4665cab44bf1ed53387721d2c6c47", "19225497", "0.00002 XLM", "21 minutes ago"));
store.dispatch(addTransaction("f84020546159e99c5ffa3b888b3d60997f69655b3a68367e3d5885551b538db0", "19225496", "0.001 XLM",   "21 minutes ago"));
store.dispatch(addTransaction("b8e45e552d05981605204c9191b45c4ffa26417831d2ceb71b7d90c9defe6e4a", "19225496", "0.00001 XLM", "21 minutes ago"));
store.dispatch(addTransaction("f4174fc4da71042e997c405209d5088164a6072411c968f1adae1743de0f0d88", "19225496", "0.00001 XLM", "21 minutes ago"));
store.dispatch(addTransaction("bb5aa5e421cfb0c129a05589f9d19a57a9dbeb134d43fa299c229e32c75516b5", "19225496", "0.00001 XLM", "21 minutes ago"));
store.dispatch(addTransaction("2cc2219ce48fb28654967313ca87bb35bdfe3c763393c13b8ace6dd2fcbf2c4a", "19225496", "0.00001 XLM", "21 minutes ago"));
store.dispatch(addTransaction("1d3546d8ed7ab9accd90244c2538ea37f945cfda799207e691b32dce1b1a1a54", "19225496", "0.00001 XLM", "22 minutes ago"));

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

