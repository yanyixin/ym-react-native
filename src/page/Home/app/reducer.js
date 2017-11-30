import initialState from '../../../store/initialState'
import * as ActionTypes from './actionTypes'

export default function AppReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.APP_TYPE:
      return {
        ...state,
        user: 'yuewen'
      }
    default:
      return state
  }
}
