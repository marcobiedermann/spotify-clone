import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CategoryPageContainer from '../../../containers/CategoryPage';
import Categories from '../../../components/Categories';

class CategoriesPage extends Component {
  componentDidMount() {
    const { accessToken, fetchCategories } = this.props;

    fetchCategories(accessToken);
  }

  render() {
    const { categories, match } = this.props;
    return (
      <Switch>
        <Route
          path={`${match.url}/:category_id`}
          component={CategoryPageContainer}
        />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Categories</title>
              </Helmet>
              <Categories categories={categories.items} />
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
  fetchCategories: PropTypes.func,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

CategoriesPage.defaultProps = {
  accessToken: '',
  categories: {},
  fetchCategories: () => {},
  match: {
    url: '',
  },
};

export default CategoriesPage;
