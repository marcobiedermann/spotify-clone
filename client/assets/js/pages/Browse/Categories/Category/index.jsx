import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CategoryPlaylistsPageContainer from '../../../../containers/CategoryPlaylistsPage';
import Category from '../../../../components/Category';

class CategoryPage extends Component {
  componentDidMount() {
    const { accessToken, fetchCategory, match } = this.props;

    fetchCategory(
      accessToken,
      match.params.category_id,
    );
  }

  render() {
    const { category, match } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/playlists`}
          component={CategoryPlaylistsPageContainer}
        />
        <Route
          path={`${match.url}`}
          component={() => <Category {...category} />}
        />
      </Switch>
    );
  }
}

CategoryPage.propTypes = {
  accessToken: PropTypes.string,
  category: PropTypes.shape(),
  fetchCategory: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category_id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
};

CategoryPage.defaultProps = {
  accessToken: '',
  category: null,
  fetchCategory: () => {},
  match: {
    params: {
      category_id: '',
    },
    url: '',
  },
};

export default CategoryPage;
