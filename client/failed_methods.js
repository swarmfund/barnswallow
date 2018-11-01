let charts = await sdk.horizon.charts.get('DAI')
console.log('charts', charts.data)

let orderBook = await sdk.horizon.history_offers.getAll(accountID)
console.log('orderBook', orderBook.data)

let coreSales = await sdk.horizon.core_sales.get()
console.log('coreSales', coreSales.data)

let keyValue = await sdk.horizon.key_value.getAll()
console.log('keyValue', keyValue.data)

let limit = await sdk.horizon.limits.get(accountID)
console.log('limit', limit.data)

let ob = await sdk.horizon.order_book.getAll(accountID)
console.log('ob', ob.data)

let kycEntity = await sdk.api.kyc_entities.getAll(accountID)
console.log('kycEntity', kycEntity.data)

let price = await sdk.horizon.prices.getHistory()
console.log('price', price.data);

let public = await sdk.horizon.public.getOperation()
console.log('public', public.data);

let public2 = await sdk.horizon.public.getOperationsPage()
console.log('public', public2.data);

let ref1 = await sdk.horizon.preferences.get()
console.log('references', ref1.data);

let ref2 = await sdk.horizon.preferences.getAll()
console.log('references', ref2.data);

let reqAsset = await sdk.horizon.request.getAllForAssets()
console.log('reqAsset', reqAsset.data);

let reqIssuance = await sdk.horizon.request.getAllForIssuances()
console.log('reqIss', reqIssuance.data);

let reqlimit = await sdk.horizon.request.getAllForLimitsUpdates()
console.log('reqlimit', reqlimit.data);

let reqApre = await sdk.horizon.request.getAllForPreIssuances()
console.log('reqpre', reqpre.data);

let reqSales= await sdk.horizon.request.getAllForSales()
console.log('reqSales', reqSales.data);

let reqkyc= await sdk.horizon.request.getAllForUpdateKyc()
console.log('reqkyc', reqkyc.data);

let reqsales= await sdk.horizon.request.getAllForSalesDetails()
console.log('reqsales', reqsales.data);

let reqwithdraw= await sdk.horizon.request.getAllForWithdrawals()
console.log('reqw', reqw.data);

let trades= await sdk.horizon.trades.getPage()
console.log('trades', trades.data);