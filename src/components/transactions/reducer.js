import undoable, { includeAction } from 'redux-undo'
import {ADD_TRANSACTION, TOGGLE_TRANSACTION} from "./actionTypes";

const transaction = (state, action) => {

  console.log( state );

  switch (action.type) {

    case ADD_TRANSACTION:
      return {
        id: action.id,
        text: action.text,
        ledger: action.ledger,
        fee: action.fee,
        timestamp: action.timestamp,
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

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [
        ...state,
        transaction(undefined, action)
      ]
    default:
      return state
  }
}

export default transactions
/*
const undoableTransactions = undoable(
    transactions,
    {
      filter: includeAction([ADD_TRANSACTION, TOGGLE_TRANSACTION]),
      initialHistory: { // initial history (e.g. for loading)
        past: [],
        present: {},
        future: []
      }
    })

export default undoableTransactions*/
