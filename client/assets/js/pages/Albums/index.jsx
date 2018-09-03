import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Route,
  Switch,
} from 'react-router-dom';
import AlbumPageContainer from '../../containers/AlbumPage';

const AlbumsPage = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/:album_id`}
      component={AlbumPageContainer}
    />
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
