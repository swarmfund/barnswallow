import { combineReducers } from 'redux';

import post, * as fromPost from './post';
import repo, * as fromRepo from './repo';
import transactions from './transactions';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  post,
  repo,
  transactions,
  visibilityFilter
});

export default rootReducer;