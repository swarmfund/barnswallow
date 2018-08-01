import * as types from '../constants/ActionTypes'
import {Swarm} from "swarm-sdk";

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

let nextTransactionId = 0;
export const addTransaction = (text, ledger, fee, timestamp ) => ({
  type: 'ADD_TRANSACTION',
  id: nextTransactionId++,
  text,
  ledger,
  fee,
  timestamp
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTransaction = (id) => ({
  type: 'TOGGLE_TRANSACTION',
  id
});