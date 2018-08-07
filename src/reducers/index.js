import { combineReducers } from 'redux';

import post, * as fromPost from './post';
import repo, * as fromRepo from './repo';
import transactions from '../components/transactions/reducer';
import ledgers from '../components/ledger/reducer';

const rootReducer = combineReducers({
  post,
  repo,
  transactions,
  ledgers
});

export default rootReducer;
