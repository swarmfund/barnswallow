import { combineReducers } from 'redux';

import post, * as fromPost from './post';
import repo, * as fromRepo from './repo';
import transactions from './transactions';
import ledgers from './ledgers';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  post,
  repo,
  transactions,
  ledgers
});

export default rootReducer;