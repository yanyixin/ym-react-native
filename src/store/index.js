import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import demoReduces from '../page/Home/app/reducer'
import aboutMeReduces from '../page/AboutMe/app/reducer'
import { reducer as nav } from '../router'

const rootReducer = combineReducers({
  app: demoReduces,
  aboutMe: aboutMeReduces,
  nav
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  // 热替换选项
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(rootReducer, () => {
      store.replaceReducer(rootReducer)
    })
  }
  return store
}
