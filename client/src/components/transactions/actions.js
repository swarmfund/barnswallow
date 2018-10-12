import * as types from './actionTypes';

let nextTransactionId = 0;
export const addTransaction = ( item ) => ({
  type: types.ADD_TRANSACTION,
  id: nextTransactionId++,
  text: item.id,
  ledger: item.ledger,
  fee: "–",
  timestamp: item.createdAt
});

export const toggleTransaction = (id) => ({
  type: types.TOGGLE_TRANSACTION,
  id
});

export default addTransaction
