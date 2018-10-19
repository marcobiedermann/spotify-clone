import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import ArtistPage from './Artist';

class ArtistsPage extends PureComponent {
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
        <Route path={`${match.url}/:id`} component={ArtistPage} />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Artists</title>
              </Helmet>
              Artists
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default ArtistsPage;
