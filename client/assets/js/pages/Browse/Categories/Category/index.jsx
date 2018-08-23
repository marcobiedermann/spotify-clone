import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PlaylistsPage from './Playlists';
import Category from '../../../../components/Category';
import { ACCESS_TOKEN } from '../../../../constants/config';

class CategoryPage extends Component {
  componentDidMount() {
    const { fetchCategory, match } = this.props;

    fetchCategory(
      ACCESS_TOKEN,
      match.params.category_id,
    );
  }

  render() {
    const { category, match } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/playlists`}
          component={PlaylistsPage}
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
  category: {},
  fetchCategory: () => {},
  match: {
    params: {
      category_id: '',
    },
    url: '',
  },
};

export default CategoryPage;
