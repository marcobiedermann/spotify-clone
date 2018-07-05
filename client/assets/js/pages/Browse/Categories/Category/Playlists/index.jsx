import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCategoryPlaylists } from '../../../../../actions/browse';
import Playlists from '../../../../../components/Playlists';
import { ACCESS_TOKEN } from '../../../../../constants/config';

class PlaylistsPage extends Component {
  componentDidMount() {
    const { fetchCategoryPlaylists } = this.props;

    fetchCategoryPlaylists(ACCESS_TOKEN, 'dinner');
  }

  render() {
    const { match, playlists } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}`}
          component={() => <Playlists playlists={playlists.items} />}
        />
      </Switch>
    );
  }
}

PlaylistsPage.propTypes = {
  playlists: PropTypes.shape(),
  fetchCategoryPlaylists: PropTypes.func,
  match: PropTypes.shape(),
};

PlaylistsPage.defaultProps = {
  playlists: {},
  fetchCategoryPlaylists: () => {},
  match: null,
};

const mapStateToProps = state => ({
  ...state,
  playlists: state.browse.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchCategoryPlaylists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsPage);
