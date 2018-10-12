import * as types from './actionTypes';

let nextAssetPairId = 0;
export const addAssetPair = ( text, availableForIssuance, maxIssuanceAmount ) => ({
  type: types.ADD_ASSET_PAIR,
  id: nextAssetPairId++,
  text,
  availableForIssuance,
  maxIssuanceAmount
});

export default addAssetPair
