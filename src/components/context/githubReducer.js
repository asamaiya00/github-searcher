import {
  GET_USER,
  GET_REPOS,
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
} from './types';

export default (state, { type, payload }) => {
  switch (type) {
    case SEARCH_USERS:
      return { ...state, users: payload, loading: false };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
