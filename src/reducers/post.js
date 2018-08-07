import { Swarm } from 'swarm-sdk'

import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  UPDATE,
  FETCH_BALANCE
} from '../components/ActionTypes';

const initialState = [];

const post = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return state.concat([action.data]);
    case DELETE_POST:
      return state.filter((post) => post.id !== action.id);
    case EDIT_POST:
      return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post);
    case UPDATE:
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing
          }
        } else return post;
      });
    case FETCH_BALANCE:
      console.log(FETCH_BALANCE, state);
      var accountId = fetchBalanceFromSwarmSdk();

      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            log: 'See console for results',
          }
        } else return post;
      });
    default:
      return state;
  }
};

export default post;

async function fetchBalanceFromSwarmSdk()
{

  console.log( "Swarm...");

  let sdk = await Swarm.create('https://api-stage.swarm.fund');

  let wallet = await sdk.api.wallets.get('preethi@swarm.fund', 'abc123');
  sdk.useWallet(wallet);
  console.log(sdk.wallet.accountId);

  let page = await sdk.horizon.balances.getPage();
  console.log('Page', page.data);

  return sdk;
}


/*
// this is the reducer - no 'async' on the outer function since it just returns a function
export const login = (username, password) => {

  // this one's 'async'
  return async dispatch => {

    // wrap in try to listen for Promise rejections - equivalent of '.catch()'
    try {

      // wait for the fetch to finish then dispatch the result
      const data = await loginRequest(username, password);
      dispatch(loginSuccess(data));
    } catch (e) {

      // catch errors from fetch
      dispatch(loginFailure(e));
    }
  };
};
*/
