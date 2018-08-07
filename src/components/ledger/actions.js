import * as types from './actionTypes';

let nextLedgerId = 0;
export const add = (text, transactionCount, operationCount, timestamp ) => ({
  type: types.ADD_LEDGER,
  id: nextLedgerId++,
  text,
  transactionCount,
  operationCount,
  timestamp
});

export const toggle = (id) => ({
  type: types.TOGGLE_LEDGER,
  id
});

export default add
