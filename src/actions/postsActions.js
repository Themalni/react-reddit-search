import { FETCH_POSTS, IS_LOADING_CHANGE_STATE, POSTS_FOUND_CHANGE_STATE, POSTS_NOT_FOUND_CHANGE_STATE } from './types';
import axios from 'axios';

export const isLoadingStateChange = (changeState) => dispatch => {
  dispatch({
    type: IS_LOADING_CHANGE_STATE,
    payload: changeState
  })
}

export const postsFoundChangeState = (changeState) => dispatch => {
  dispatch({
    type: POSTS_FOUND_CHANGE_STATE,
    payload: changeState
  })
}

export const postsNotFoundChangeState = (changeState) => dispatch => {
  dispatch({
    type: POSTS_NOT_FOUND_CHANGE_STATE,
    payload: changeState
  })
}

export const fetchPosts = () => (dispatch, getState) => {
  const { searchTerm } = getState().search
  axios.get(`http://www.reddit.com/search.json?q=${searchTerm.search}&sort=new&limit=20&raw_json=1`)
    .then(response => {
      const dataReceived = response.data.data.children
      if (dataReceived.length === 0) {
        dispatch(postsFoundChangeState(false))
        dispatch(isLoadingStateChange(false))
        dispatch(postsNotFoundChangeState(true))
      } else {
        dispatch({
          type: FETCH_POSTS,
          payload: dataReceived.map(data => data.data)
        })
        dispatch(isLoadingStateChange(false))
        dispatch(postsFoundChangeState(true))
      }
    })
    .catch(error => console.log(error));
}