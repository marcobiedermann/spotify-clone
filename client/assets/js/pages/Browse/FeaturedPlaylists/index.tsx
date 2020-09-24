import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { fetchFeaturedPlaylists } from '../../../actions/browse';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import Playlists from '../../../components/Playlists';

const FeaturedPlaylistsPage: FC<RouteChildrenProps> = () => {
  const dispatch = useDispatch();
  const { error, isLoading, playlists } = useSelector((state: any) => ({
    error: state.browse.error,
    isLoading: state.browse.isLoading,
    playlists: state.browse.playlists,
  }));

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
    return <Loader />;
  }

  dispatch(fetchFeaturedPlaylists());

  return (
    <>
      <Helmet>
        <title>Featured Playlists</title>
      </Helmet>
      <Playlists {...playlists} />
    </>
  );
};

export default FeaturedPlaylistsPage;
