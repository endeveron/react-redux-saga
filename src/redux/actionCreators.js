import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from './actionTypes';

// UI

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })

// POST

export const createPost = post => ({ type: CREATE_POST, payload: post })

export const fetchPosts = () => async dispatch => {
  let fetchedPosts = []
  try {
    dispatch(showLoader())
    const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
    res && (fetchedPosts = await res.json())
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(hideLoader())
  }
  dispatch({ type: FETCH_POSTS, payload: fetchedPosts })
}