import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CategoryPlaylistsPageContainer from '../../../../containers/CategoryPlaylistsPage';
import Category from '../../../../components/Category';
import Loader from '../../../../components/Loader';

class CategoryPage extends Component {
  componentDidMount() {
    const {
      accessToken,
      fetchCategory,
      match,
    } = this.props;

    fetchCategory(
      accessToken,
      match.params.category_id,
    );
  }

  render() {
    const {
      category,
      isLoading,
      match,
    } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/playlists`}
          component={CategoryPlaylistsPageContainer}
        />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>{category.name}</title>
              </Helmet>
              {isLoading ? (
                <Loader />
              ) : (
                <Category {...category} />
              )}
            </div>
          )}
        />
      </Switch>
    );
  }
}

CategoryPage.propTypes = {
  accessToken: PropTypes.string,
  category: PropTypes.shape({
    name: PropTypes.string,
  }),
  fetchCategory: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category_id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
};

CategoryPage.defaultProps = {
  accessToken: '',
  category: {
    name: '',
  },
  fetchCategory: () => {},
  isLoading: false,
  match: {
    params: {
      category_id: '',
    },
    url: '',
  },
};

export default CategoryPage;
