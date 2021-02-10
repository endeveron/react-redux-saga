import { CREATE_POST, FETCH_POSTS } from './actionTypes';

export const createPost = post => ({ type: CREATE_POST, payload: post })

export const fetchPosts = () => async dispatch => {
  let fetchedPosts = []
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
    res && (fetchedPosts = await res.json())
  } catch (err) {
    console.log(err);
  }
  dispatch({ type: FETCH_POSTS, payload: fetchedPosts })
}
