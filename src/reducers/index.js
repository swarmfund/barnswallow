import { combineReducers } from 'redux';

import post, * as fromPost from './post'
import repo, * as fromRepo from './repo'

const rootReducer = combineReducers({
  post,
  repo
});

export default rootReducer;