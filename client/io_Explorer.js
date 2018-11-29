
async function explorer()
{


let sdk = await Swarm.create('https://api-stage.swarm.fund');

 
let wallet = await sdk.api.wallets.get('my@email.com', 'MyPassw0rd');
sdk.useWallet(wallet);

let accountID = sdk.wallet.accountId;
console.log(accountID);


	
//fetch list of all assets in the platform	
let assets = await sdk.horizon.assets.getAll()
console.log('assets', assets.data);
	

//get details about the particular asset 	
let assetCode = await sdk.horizon.assets.get('DAI')
console.log('assetCode', assetCode.data);

//get the balance of the account holding the particular asset
let assetHolders = await sdk.horizon.assets.getHolders('DAI')
console.log('assetHolders', assetHolders.data);
	


//get individual user details (accountID can be any user) 
let user = await sdk.api.users.get('GD2LSPJ7MRE5J2YQ3C4TW3YW3V5B5JYNIZEO2E4AC4KJQCRWJGD4BQFE');
console.log('user',user.data);

	
//fetch list of all assetPairs in the platform	
let assetPairs = await sdk.horizon.assetPairs.getAll()
console.log('assetPairs', assetPairs.data);


//softcap_hardcap
let sales = await sdk.horizon.sales.getPage('1')
console.log('sales', sales.data);
	

//softcap_hardcap of specific asset
let saleID = await sdk.horizon.sales.get('2')
console.log('saleId', saleID.data);


}
