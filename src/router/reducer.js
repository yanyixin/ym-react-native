import { NavigationActions } from 'react-navigation';
import RootNavigator from './router';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Home');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('AboutMe');

const initialNavState = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState,
);
export default function nav(state = initialNavState, action) {
  let nextState;
  console.log('action---', action);
  switch (action.type) {
    case 'Home':
    case 'AboutMe':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}
