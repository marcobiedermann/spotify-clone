import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Button, Error, Image, Loader, Media, MediaBody, MediaObject } from '../../../components';
import { useArtist } from '../../../hooks/artists';
import styles from './Artist.style.module.css';
import Albums from './Albums';
import RelatedArtists from './RelatedArtists';
import TopTracks from './TopTracks';

const defaultImageSize = 140;

function ArtistPage(): JSX.Element {
  const { pathname } = useLocation();
  const { artistId } = useParams();
  const { data, error, isError, isPending } = useArtist(artistId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
    return <Loader />;
  }

  const { images = [], name } = data;
  const image = images[0];

  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <header>
        <Media>
          <MediaObject>
            <Image
              {...image}
              alt={name || ''}
              width={defaultImageSize}
              height={defaultImageSize}
              className={styles.artist__image}
            />
          </MediaObject>
          <MediaBody>
            <h2>{name}</h2>
          </MediaBody>
        </Media>
      </header>
      <section>
        <p>
          <Button>Play</Button>
        </p>
      </section>
      <TopTracks />
      <Albums />
      <RelatedArtists />
    </>
  );
}

export default ArtistPage;
