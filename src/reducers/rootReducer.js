import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  posts: postsReducer,
  search: searchReducer
})