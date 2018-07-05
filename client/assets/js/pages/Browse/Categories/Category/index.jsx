import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PlaylistsPage from './Playlists';
import { fetchCategory } from '../../../../actions/browse';
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
  match: PropTypes.shape(),
};

CategoryPage.defaultProps = {
  category: {},
  fetchCategory: () => {},
  match: null,
};

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
