import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../actions/users';
import UserPage from '../pages/Users/User';

const mapStateToProps = state => ({
  ...state,
  user: state.users.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchUser,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);
