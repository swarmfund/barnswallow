import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAIL,

} from '../components/ActionTypes';

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/swidnikk/repos`
      }
    }
  };
}

const repo = (state = { repos: [] }, action) => {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
};

export default repo;
