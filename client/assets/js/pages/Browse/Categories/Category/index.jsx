import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PlaylistsPage from './Playlists';
import { fetchCategory } from '../../../../actions/browse';
import Category from '../../../../components/Category';
import { ACCESS_TOKEN } from '../../../../constants/config';

class CategoryPage extends Component {
  componentDidMount() {
    const { fetchCategory } = this.props;

    fetchCategory(
      ACCESS_TOKEN,
      'dinner',
    );
  }

  render() {
    const { category, match } = this.props;

    return (
      <div>
        <Category {...category} />
        <Route path={`${match.url}/playlists`} exact component={PlaylistsPage} />
      </div>
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
