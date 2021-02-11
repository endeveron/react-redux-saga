import {
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER
} from './actionTypes';

const initialState = {
  loading: false,
  alert: {
    show: false,
    text: ''
  }
}

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER: return { ...state, loading: true }
    case HIDE_LOADER: return { ...state, loading: false }
    case SHOW_ALERT: return {
      ...state,
      alert: {
        ...state.alert,
        show: true,
        text: action.payload
      }
    }
    case HIDE_ALERT: return {
      ...state,
      alert: {
        ...state.alert,
        show: false,
        text: ''
      }
    }
    default: return state
  }
}