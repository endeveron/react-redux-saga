import { takeEvery, put, call } from 'redux-saga/effects'
import { hideLoader, showAlert, showLoader } from './actionCreators'
import { REQUEST_POSTS, FETCH_POSTS } from './actionTypes'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return await res.json()
}

function* sagaWorker() {
  try {
    yield put(showLoader())                     // dispatching
    const payload = yield call(fetchPosts)      // waiting
    yield put({ type: FETCH_POSTS, payload })

  } catch (err) {
    yield put(showAlert(err.message))

  } finally {
    yield put(hideLoader())
  }
}

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}
