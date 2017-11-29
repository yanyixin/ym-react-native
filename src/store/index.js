import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import demoReduces from '../page/Home/app/reducer';
import aboutMeReduces from '../page/AboutMe/app/reducer';
import { reducer as nav } from '../router';

const rootReducer = combineReducers({
  app: demoReduces,
  aboutMe: aboutMeReduces,
  nav,
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(rootReducer);
export default store;
