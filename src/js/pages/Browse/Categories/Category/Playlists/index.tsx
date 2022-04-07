import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Error from '../../../../../components/Error';
import Loader from '../../../../../components/Loader';
import Playlists from '../../../../../components/Playlists';
import { useBrowseCategoryPlaylists } from '../../../../../hooks/browse/categories';

function PlaylistsPage(): JSX.Element {
  const { categoryId } = useParams();
  const { data, error } = useBrowseCategoryPlaylists(categoryId);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { playlists } = data;

  return (
    <>
      <Helmet>
        <title>Playlists</title>
      </Helmet>
      <Playlists items={playlists.items} />
    </>
  );
}

export default PlaylistsPage;
