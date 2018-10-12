import undoable, { includeAction } from 'redux-undo'
import {ADD_LEDGER, TOGGLE_LEDGER} from "./actionTypes";



const ledger = (state = {}, action) => {

  console.log( state );

  switch (action.type) {

    case ADD_LEDGER:
      return {
        id: action.id,
        text: action.text,
        transactionCount: action.transactionCount,
        operationCount: action.operationCount,
        timestamp: action.timestamp,
        completed: false
      }
    case TOGGLE_LEDGER:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const initialState = [];
const ledgers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LEDGER:
      return [
        ...state,
        ledger(undefined, action)
      ]
    case TOGGLE_LEDGER:
      return state.map(t =>
          ledgers(t, action)
      )
    default:
      return state
  }
}

export default ledgers

/*
const undoableLedgers = undoable(ledgers, { filter: includeAction([ADD_LEDGER, TOGGLE_LEDGER]) })

export default undoableLedgers
*/
