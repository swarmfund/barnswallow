import {ADD_ASSET_PAIR} from "./actionTypes";

const assetPair = (state, action) => {

  console.log( state );

  switch (action.type) {

    case ADD_ASSET_PAIR:
      return {
        id: action.id,
        text: action.text,
        availableForIssuance: action.availableForIssuance,
        maxIssuanceAmount: action.maxIssuanceAmount,

        completed: false
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const initialState = []

const assetPairs = (state = initialState, action) => {
  console.log ("HELLLLLLLO", action.type);
  switch (action.type) {
    case ADD_ASSET_PAIR:
      return [
        ...state,
        assetPair(undefined, action)
      ]
    default:
      return state
  }
}

export default assetPairs
