import { combineReducers } from 'redux';

import { postReducer } from './postReducer';
import { UIReducer } from './UIReducer';

const rootReducer = combineReducers({
  post: postReducer,
  UI: UIReducer,
})

export default rootReducer;