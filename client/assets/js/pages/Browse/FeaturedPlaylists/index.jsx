import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchFeaturedPlaylists } from '../../../actions/browse';
import Playlists from '../../../components/Playlists';
import { ACCESS_TOKEN } from '../../../constants/config';

class FeaturedPlaylists extends Component {
  componentDidMount() {
    const { fetchFeaturedPlaylists } = this.props;

    fetchFeaturedPlaylists(ACCESS_TOKEN);
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

FeaturedPlaylists.propTypes = {
  playlists: PropTypes.shape(),
  fetchFeaturedPlaylists: PropTypes.func,
  match: PropTypes.shape(),
};

FeaturedPlaylists.defaultProps = {
  playlists: {},
  fetchFeaturedPlaylists: () => {},
  match: null,
};

const mapStateToProps = state => ({
  ...state,
  playlists: state.browse.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchFeaturedPlaylists,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedPlaylists);
