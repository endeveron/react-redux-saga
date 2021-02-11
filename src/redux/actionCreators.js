import { CREATE_POST, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER } from './actionTypes';

// UI

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const hideAlert = () => ({ type: HIDE_ALERT })
export const showAlert = text => {
  return dispatch => {
    dispatch({ type: SHOW_ALERT, payload: text })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000);
  }
}

// POST

export const createPost = post => ({ type: CREATE_POST, payload: post })
export const fetchPosts = () => ({ type: REQUEST_POSTS })  // via Saga

// export const fetchPosts = () => async dispatch => {
//   try {
//     dispatch(showLoader())
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//     const fetchedPosts = await res.json()
//     dispatch({ type: FETCH_POSTS, payload: fetchedPosts })
//   } catch (err) {
//     dispatch(showAlert(err.message))
//     setTimeout(() => {
//       dispatch(hideAlert())
//     }, 4000);
//   } finally {
//     dispatch(hideLoader())
//   }
// }