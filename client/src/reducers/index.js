import { combineReducers } from 'redux';

import post, * as fromPost from './post';
import repo, * as fromRepo from './repo';
import transactions from '../components/transactions/reducer';
import ledgers from '../components/ledger/reducer';
import assets from '../components/assetPairs/reducer';

const rootReducer = combineReducers({
  post,
  repo,
  transactions,
  ledgers,
  assets
});

export default rootReducer;
