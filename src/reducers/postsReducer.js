import { FETCH_POSTS, POSTS_FOUND_CHANGE_STATE, IS_LOADING_CHANGE_STATE, POSTS_NOT_FOUND_CHANGE_STATE } from '../actions/types';

export const initState = {
  postsFound: false,
  postsNotFound: false,
  isLoading: false,
  items: []
}

export function postsReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case IS_LOADING_CHANGE_STATE:
      return {
        ...state,
        isLoading: action.payload
      }
    case POSTS_FOUND_CHANGE_STATE:
      return {
        ...state,
        postsFound: action.payload
      }
    case POSTS_NOT_FOUND_CHANGE_STATE:
      return {
        ...state,
        postsNotFound: action.payload
      }
    default:
      return state;
  }
}