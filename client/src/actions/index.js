import * as types from '../components/ActionTypes';
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




export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});


