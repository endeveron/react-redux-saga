import { showAlert } from './actionCreators'
import { CREATE_POST } from './actionTypes'

const forbiddenWords = ['dick', 'fuck']

const forbiddenWordsMiddleware = ({ dispatch }) => next => action => {
  if (action.type === CREATE_POST) {
    const title = action.payload.title
    const text = action.payload.text
    const found = forbiddenWords.filter(w => (title.includes(w) || text.includes(w)))

    if (found.length) {
      const w = found.join(', ')
      return dispatch(showAlert(`Post contains forbidden words: ${ w }`))
    }
  }
  return next(action)
}

export default forbiddenWordsMiddleware