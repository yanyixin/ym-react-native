import initialState from '../../../store/initialState';
import * as ActionTypes from './actionTypes';

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.USER_NAME:
      return {
        ...state,
        userName: 'ym',
      };
    default:
      return state;
  }
}
