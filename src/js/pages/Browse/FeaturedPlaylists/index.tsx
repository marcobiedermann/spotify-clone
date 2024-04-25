import { Helmet } from 'react-helmet';
import { Error, Loader, Playlists } from '../../../components';
import { useBrowseFeaturedPlaylists } from '../../../hooks/browse/featured-playlists';

function FeaturedPlaylistsPage(): JSX.Element {
  const { data, error, isError, isPending } = useBrowseFeaturedPlaylists();

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
    return <Loader />;
  }

  const { playlists } = data;

  return (
    <>
      <Helmet>
        <title>Featured Playlists</title>
      </Helmet>
      <Playlists items={playlists.items} />
    </>
  );
}

export default FeaturedPlaylistsPage;
