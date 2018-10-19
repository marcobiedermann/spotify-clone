import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import AlbumPage from './Album';

class AlbumsPage extends PureComponent {
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
        <Route path={`${match.url}/:album_id`} component={AlbumPage} />
        <Route
          path={match.url}
          component={() => (
            <div>
              <Helmet>
                <title>Albums</title>
              </Helmet>
              Albums
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default AlbumsPage;
