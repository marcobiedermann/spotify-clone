import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import CategoryPage from './Category';
import { fetchCategories } from '../../../actions/browse';
import Categories from '../../../components/Categories';
import { ACCESS_TOKEN } from '../../../constants/config';

class CategoriesPage extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;

    fetchCategories(ACCESS_TOKEN);
  }

  render() {
    const { categories, match } = this.props;
    return (
      <div>
        <Categories categories={categories.items} />
        <Route path={`${match.url}/:category_id`} component={CategoryPage} />
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  categories: PropTypes.shape(),
  fetchCategories: PropTypes.func,
  match: PropTypes.shape(),
};

CategoriesPage.defaultProps = {
  categories: {},
  fetchCategories: () => {},
  match: null,
};

const mapStateToProps = state => ({
  categories: state.browse.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchCategories,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesPage);
