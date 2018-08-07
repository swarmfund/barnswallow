import * as types from './actionTypes';

let nextTransactionId = 0;
export const addTransaction = (text, ledger, fee, timestamp ) => ({
  type: types.ADD_TRANSACTION,
  id: nextTransactionId++,
  text,
  ledger,
  fee,
  timestamp
});

export const toggleTransaction = (id) => ({
  type: types.TOGGLE_TRANSACTION,
  id
});

export default addTransaction
