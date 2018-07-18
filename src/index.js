//import { Swarm } from 'swarm-sdk';
import _ from 'lodash';


function component()
{
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 // document.write('Quick Test');
  console.log('app loaded');

  return element;
}




async function sdk()
{
//  let sdk = await Swarm.create('https://api-stage.swarm.fund');

  //document.write( sdk.horizon.server.transactions().forAccount() );

//  let page = await sdk.horizon.balances.getPage();
//  console.log('Page', page.data);

//  let prevPage = await page.fetchPrev();
//  console.log('Previous page', prevPage.data);

  //let page = await sdk.horizon.balances.getPage();
  return sdk;
}


console.log('starting...');

//sdk();

document.body.appendChild(component());
