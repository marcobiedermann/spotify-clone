import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import AlbumPage from './Album';

const AlbumsPage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/:album_id`}
      component={AlbumPage}
    />
    <Route
      path={`${match.url}`}
      component={() => (
        <div>
          Albums
        </div>
      )}
    />
  </Switch>
);

AlbumsPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

AlbumsPage.defaultProps = {
  match: {
    url: '',
  },
};

export default AlbumsPage;
