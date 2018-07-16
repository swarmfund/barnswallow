//import { Swarm } from 'swarm-sdk';

document.write('Quick Test');
console.log('app loaded');




async function sdk()
{
  let sdk = await Swarm.create('https://api-stage.swarm.fund');

  document.write( sdk.horizon.server.transactions().forAccount()


  //let page = await sdk.horizon.balances.getPage();
  return sdk;
}


console.log('starting...');



createWallet();
