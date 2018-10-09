import React from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import addTransaction from './components/transactions/actions';
import addLedger from './components/ledger/actions';
import './index.css';
import {Swarm} from "swarm-sdk";



const store = configureStore();

console.log(store.getState());


// ledger mock data
store.dispatch(addLedger("2f28cd10384d152220d401dc26b3e8852f579f7f688c52e697fe831ac8fc6ad9", "5", "2", "22 minutes ago"));

// store.dispatch(addTransaction("2f28cd10384d152220d401dc26b3e8852f579f7f688c52e697fe831ac8fc6ad9", "19225497", "0.00001 XLM", "22 minutes ago"));
// store.dispatch(addTransaction("d618329aa7cf78f304a220b42050be23790cd71dc51b2f20708c05798d34d5f8", "19225497", "0.00006 XLM", "22 minutes ago"));
// store.dispatch(addTransaction("2c6c600630886a28a432fac1d42351b8ebc73e9bb2fd26542a7eb8b2716542f7", "19225497", "0.00001 XLM", "21 minutes ago"));
// store.dispatch(addTransaction("c142ccb5b8af4838c77dd6fe622aa57747c4665cab44bf1ed53387721d2c6c47", "19225497", "0.00002 XLM", "21 minutes ago"));
// store.dispatch(addTransaction("f84020546159e99c5ffa3b888b3d60997f69655b3a68367e3d5885551b538db0", "19225496", "0.001 XLM",   "21 minutes ago"));
// store.dispatch(addTransaction("b8e45e552d05981605204c9191b45c4ffa26417831d2ceb71b7d90c9defe6e4a", "19225496", "0.00001 XLM", "21 minutes ago"));
// store.dispatch(addTransaction("f4174fc4da71042e997c405209d5088164a6072411c968f1adae1743de0f0d88", "19225496", "0.00001 XLM", "21 minutes ago"));
// store.dispatch(addTransaction("bb5aa5e421cfb0c129a05589f9d19a57a9dbeb134d43fa299c229e32c75516b5", "19225496", "0.00001 XLM", "21 minutes ago"));
// store.dispatch(addTransaction("2cc2219ce48fb28654967313ca87bb35bdfe3c763393c13b8ace6dd2fcbf2c4a", "19225496", "0.00001 XLM", "21 minutes ago"));
// store.dispatch(addTransaction("1d3546d8ed7ab9accd90244c2538ea37f945cfda799207e691b32dce1b1a1a54", "19225496", "0.00001 XLM", "22 minutes ago"));



async function explorer()
{

  let sdk = await Swarm.create('https://api-stage.swarm.fund');

//  let wallet = await sdk.api.wallets.get(process.env.SWARM_INVEST_USERNAME, process.env.SWARM_INVEST_PASSWORD);
//  sdk.useWallet(wallet);

//  let accountID = sdk.wallet.accountId;
//  console.log(accountID);


//get details of last 100 users registered in the platform
//  let allUsers = await sdk.api.users.getPage('1');
//  console.log('allUsers',allUsers.data);

//get individual user details (accountID can be any user)
//  let user = await sdk.api.users.get('GD2LSPJ7MRE5J2YQ3C4TW3YW3V5B5JYNIZEO2E4AC4KJQCRWJGD4BQFE');
//  console.log('user',user.data);

//account holder asset and balance (accountID can be any user)
//  let accountDetails = await sdk.horizon.account.getDetails(accountID)
//  console.log('accountDetails', accountDetails.data)

//approvers
//  let signers = await sdk.horizon.account.getSigners(accountID)
//  console.log('signers', signers.data)

//get details of 10 users asset type,account ID and balance ID
//  let otherUsers = await sdk.horizon.balances.getPage()
//  console.log('otherUsers', otherUsers.data);

//key derivative functions
//  let kdf = await sdk.api.wallets.getKdfParams('preethi@swarm.fund')
//  console.log('kdf', kdf.data)

//  let prevPage = await otherUsers.fetchPrev()
//  console.log('Previous page', prevPage.data)

//get the list of all transactions
  let trans = await sdk.horizon.transactions.getPage('1')

  trans.data.map( function(transaction)
      {
        console.log('transaction:', transaction);
        store.dispatch(addTransaction( transaction ));
      }
  );

//  console.log('trans', trans.data);

//fetch detail about a specific transaction by specifying the transaction ID
  let TransID = await sdk.horizon.transactions.get('d3275938107d7dd585ef44b717e67597e0c736591b2901708c90162ea94e4e0c')
  console.log('TransID', TransID.data);

//fetch list of all assets in the platform
  let assets = await sdk.horizon.assets.getAll()
  console.log('assets', assets.data);


//get details about the particular asset
  let assetCode = await sdk.horizon.assets.get('DAI')
  console.log('assetCode', assetCode.data);

//get the balance of the account holding the particular asset
  let assetHolders = await sdk.horizon.assets.getHolders('DAI')
  console.log('assetHolders', assetHolders.data);


//fetch list of all assetPairs in the platform
  let assetPairs = await sdk.horizon.assetPairs.getAll()
  console.log('assetPairs', assetPairs.data);

//get the list of all operations performed
  let oper = await sdk.horizon.operations.getPage('1')
  console.log('oper', oper.data);

//get the accounts performed the specific action (operationID)
  let operID = await sdk.horizon.operations.get('68719480833')
  console.log('operID', operID.data);


//payments performed for specific actions
  let payment = await sdk.horizon.payments.getPage('1')
  console.log('payment', payment.data);


//sales
  let sales = await sdk.horizon.sales.getPage('1')
  console.log('sales', sales.data);


//sales
  let saleID = await sdk.horizon.sales.get('2')
  console.log('saleId', saleID.data);

//
//let core = await sdk.horizon.coreSales.get()
//console.log('core', core.data);



//
//let Keypair = sdk.wallet.keypair;
//
////get details of last 100 users registered in the platform
//let allUsers = await sdk.api.users.getPage('1');
//console.log('allUsers',allUsers.data);


}

explorer();

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

