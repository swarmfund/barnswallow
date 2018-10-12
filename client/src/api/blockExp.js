import { Swarm } from 'swarm-sdk';
import { wallet } from 'swarm-sdk';
//import { errors } from 'swarm-sdk';
//import { KycEntities } from 'swarm-sdk';
import { base } from 'swarm-sdk'
//import _ from 'lodash';



async function explorer()
{


let sdk = await Swarm.create('https://api-stage.swarm.fund');

let wallet = await sdk.api.wallets.get('preethi@swarm.fund', 'abc123')
sdk.useWallet(wallet);

let accountID = sdk.wallet.accountId;
console.log(accountID);

//get details of last 100 users registered in the platform
let allUsers = await sdk.api.users.getPage('1');
console.log('allUsers',allUsers.data);

//get individual user details (accountID can be any user)
let user = await sdk.api.users.get('GD2LSPJ7MRE5J2YQ3C4TW3YW3V5B5JYNIZEO2E4AC4KJQCRWJGD4BQFE');
console.log('user',user.data);

//account holder asset and balance (accountID can be any user)
let accountDetails = await sdk.horizon.account.getDetails(accountID)
console.log('accountDetails', accountDetails.data)

//approvers
let signers = await sdk.horizon.account.getSigners(accountID)
console.log('signers', signers.data)

//get details of 10 users asset type,account ID and balance ID
let otherUsers = await sdk.horizon.balances.getPage()
console.log('otherUsers', otherUsers.data);

//key derivative functions
let kdf = await sdk.api.wallets.getKdfParams('preethi@swarm.fund')
console.log('kdf', kdf.data)

let prevPage = await otherUsers.fetchPrev()
console.log('Previous page', prevPage.data)




}


//console.log('starting...');

explorer();

document.body.appendChild(component());
