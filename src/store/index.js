import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import demoReduces from '../page/Home/app/reducer';

const rootReducer = combineReducers({
  app: demoReduces,
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(rootReducer);
export default store;
