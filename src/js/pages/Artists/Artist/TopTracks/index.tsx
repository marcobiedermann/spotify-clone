import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { AlbumTracks, Error, Loader } from '../../../../components';
import { useArtistTopTracks } from '../../../../hooks/artists';

function TopTracksPage(): JSX.Element {
  const { artistId } = useParams();
  const { data, error, isError, isPending } = useArtistTopTracks(artistId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
    return <Loader />;
  }

  const { tracks } = data;

  return (
    <>
      <Helmet>
        <title>Top Tracks</title>
      </Helmet>
      <AlbumTracks items={tracks} />
    </>
  );
}

export default TopTracksPage;
