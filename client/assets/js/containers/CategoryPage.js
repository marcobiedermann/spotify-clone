import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategory } from '../actions/browse';
import CategoryPage from '../pages/Browse/Categories/Category';

const mapStateToProps = state => ({
  ...state,
  category: state.browse.category,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchCategory,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage);
