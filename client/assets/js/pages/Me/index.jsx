import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import PlaylistsPage from './Playlists';

class MePage extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string,
    }),
  };

  static defaultProps = {
    match: {
      url: '',
    },
  };

  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/playlists`} component={PlaylistsPage} />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Me</title>
              </Helmet>
              Me
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default MePage;
