import { Link, useLocation, useParams } from 'react-router-dom';
import { Artists, Error, Loader, Section } from '../../../components';
import { useArtistRelatedArtists } from '../../../hooks/artists';

function RelatedArtists() {
  const { pathname } = useLocation();
  const { artistId } = useParams();
  const { data, error, isError, isPending } = useArtistRelatedArtists(artistId!, {
    limit: 9,
  });

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
    return <Loader />;
  }

  const { artists } = data;

  return (
    <Section>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '1em',
          justifyContent: 'space-between',
        }}
      >
        <h2>Fans also like</h2>
        <p>
          <Link to={`${pathname}/related-artists`}>Show all</Link>
        </p>
      </div>
      <Artists artists={artists} />
    </Section>
  );
}

export default RelatedArtists;
