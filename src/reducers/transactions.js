import undoable, { includeAction } from 'redux-undo'

const transaction = (state, action) => {

  console.log( state );

  switch (action.type) {

    case 'ADD_TRANSACTION':
      return {
        id: action.id,
        text: action.text,
        ledger: action.ledger,
        fee: action.fee,
        timestamp: action.timestamp,
        completed: false
      }
    case 'TOGGLE_TRANSACTION':
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

const transactions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        ...state,
        transaction(undefined, action)
      ]
    case 'TOGGLE_TRANSACTION':
      return state.map(t =>
          transactions(t, action)
      )
    default:
      return state
  }
}

const undoableTransactions = undoable(transactions, { filter: includeAction(['ADD_TRANSACTION', 'TOGGLE_TRANSACTION']) })

export default undoableTransactions