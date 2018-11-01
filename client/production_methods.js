
async function explorer()
{


let sdk = await Swarm.create('https://api.swarm.fund');

 
let wallet = await sdk.api.wallets.get('my@email.com', 'MyPassw0rd');
sdk.useWallet(wallet);

let accountID = sdk.wallet.accountId;
console.log(accountID);


//account holder asset and balance (accountID can be any user)
let accountDetails = await sdk.horizon.account.getDetails(accountID)
console.log('accountDetails', accountDetails.data)

//balance of an account
let accountBalance = await sdk.horizon.account.getBalances(accountID)
console.log('accountBalance',accountBalance.data)

let accountLimits = await sdk.horizon.account.getLimits(accountID)
console.log('accountLimits',accountLimits.data)

let accountOffers = await sdk.horizon.account.getOffers(accountID)
console.log('accountOffers',accountOffers.data)

let accountOperations = await sdk.horizon.account.getOperations(accountID)
console.log('accountOperations',accountOperations.data)

let accountReferences = await sdk.horizon.account.getReferences(accountID)
console.log('accountReferences',accountReferences.data)

//approvers
let signers = await sdk.horizon.account.getSigners(accountID)
console.log('signers', signers.data)

//get details of 10 users asset type,account ID and balance ID
let otherUsers = await sdk.horizon.balances.getPage()
console.log('otherUsers', otherUsers.data);

//get balance of owner account by passing the balanceID
let accBalance = await sdk.horizon.balances.getAccount('BBD2KFISRS3YY4EJALCDJA3IZMKIMBV642TOSX7SIWVD3AICR42BOHAK')
console.log('accBalance', accBalance.data)

//get asset balance by passing the balanceID
let assetBalance = await sdk.horizon.balances.getAsset('BBD2KFISRS3YY4EJALCDJA3IZMKIMBV642TOSX7SIWVD3AICR42BOHAK')
console.log('assetBalance', assetBalance.data)

//documents specific to the documentID
let documents = await sdk.api.documents.get('documentID')
console.log('documents', documents.data)

//TFA
let factors = await sdk.api.factors.getAll()
console.log('factors', factors.data)

//fees for asset
let fees = await sdk.horizon.fees.getAll()
console.log('fees', fees.data)

let feesOverview = await sdk.horizon.fees.getOverview()
console.log('feesOverview', feesOverview.data)

//key derivative functions
let kdf = await sdk.api.wallets.getKdfParams('email')
console.log('kdf', kdf.data)

let prevPage = await otherUsers.fetchPrev()
console.log('Previous page', prevPage.data)

	
//fetch list of all assets in the platform	
let assets = await sdk.horizon.assets.getAll()
console.log('assets', assets.data);
	
	
//fetch list of all assetPairs in the platform	
let assetPairs = await sdk.horizon.assetPairs.getAll()
console.log('assetPairs', assetPairs.data);
	

//sales
let sales = await sdk.horizon.sales.getPage('1')
console.log('sales', sales.data);
	

//sales
let saleID = await sdk.horizon.sales.get('2')
console.log('saleId', saleID.data);


}


explorer();