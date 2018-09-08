import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../../../actions/browse';
import CategoryPage from './Category';
import Categories from '../../../components/Categories';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

export class CategoriesPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchCategories,
    } = this.props;

    fetchCategories(accessToken);
  }

  render() {
    const {
      categories,
      error,
      isLoading,
      match,
    } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/:category_id`}
          component={CategoryPage}
        />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Categories</title>
              </Helmet>
              {error && (
                <Error>{error.message}</Error>
              )}
              {isLoading ? (
                <Loader />
              ) : (
                <Categories categories={categories.items} />
              )}
            </div>
          )}
        />
      </Switch>
    );
  }
}

CategoriesPage.propTypes = {
  accessToken: PropTypes.string,
  categories: PropTypes.shape(),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  fetchCategories: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

CategoriesPage.defaultProps = {
  accessToken: '',
  categories: {},
  error: {
    message: '',
  },
  fetchCategories: () => {},
  isLoading: false,
  match: {
    url: '',
  },
};

const mapStateToProps = state => ({
  ...state,
  categories: state.browse.categories,
  error: state.browse.error,
  isLoading: state.browse.isLoading,
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
