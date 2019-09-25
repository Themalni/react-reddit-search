import { SEARCH_POSTS } from '../actions/types';

const initState = {
  searchTerm: ''
}

export default function (state = initState, action) {
  switch (action.type) {
    case SEARCH_POSTS:
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state;
  }
}