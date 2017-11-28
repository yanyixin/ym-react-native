import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './app/actions';
import App from './app/view';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators({
  ...Actions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
