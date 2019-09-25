import { SEARCH_POSTS } from './types';

export const searchPosts = (searchTerm) => dispatch => {
  dispatch({
    type: SEARCH_POSTS,
    payload: searchTerm
  })
}