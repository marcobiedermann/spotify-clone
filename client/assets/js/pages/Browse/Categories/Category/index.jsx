import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PlaylistsPage from './Playlists';
import { fetchCategory } from '../../../../actions/browse';
import Category from '../../../../components/Category';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

export class CategoryPage extends Component {
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
      error,
      isLoading,
      match,
    } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/playlists`}
          component={PlaylistsPage}
        />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>{category.name}</title>
              </Helmet>
              {error && (
                <Error>{error.message}</Error>
              )}
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
  error: PropTypes.shape({
    message: PropTypes.string,
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
  error: {
    message: '',
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

const mapStateToProps = state => ({
  ...state,
  category: state.browse.category,
  error: state.browse.error,
  isLoading: state.browse.isLoading,
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
