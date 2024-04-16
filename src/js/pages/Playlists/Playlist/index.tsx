import { formatDistance } from 'date-fns';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import {
  Button,
  Error,
  Image,
  Loader,
  Media,
  MediaBody,
  MediaObject,
  PlaylistTracks,
  Section,
} from '../../../components';
import { usePlaylist } from '../../../hooks/playlists';

const defaultImageSize = 240;

function PlaylistPage(): JSX.Element {
  const { playlistId } = useParams();
  const { data, error, isError, isPending } = usePlaylist(playlistId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
    return <Loader />;
  }

  const { description, images = [], name, owner, tracks } = data;
  const image = images[0];

  const totalDuration =
    tracks?.items.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.track?.duration_ms || 0),
      0,
    ) || 0;

  return (
    <>
      <Helmet>
        <title>Playlist</title>
      </Helmet>
      <div>
        <header>
          <Media>
            <MediaObject>
              <Image
                {...image}
                alt={name || ''}
                width={defaultImageSize}
                height={defaultImageSize}
              />
            </MediaObject>
            <MediaBody>
              <h3>Playlist</h3>
              <h1>{name}</h1>
              {description && <p>{description}</p>}
              <p>
                <strong>
                  <Link to={`/users/${owner?.id}`}>{owner?.display_name}</Link> · {tracks?.total}{' '}
                  songs,
                </strong>{' '}
                {formatDistance(0, totalDuration)}
              </p>
            </MediaBody>
          </Media>
        </header>
        <Section>
          <p>
            <Button>Play</Button>
          </p>
        </Section>
        {tracks && (
          <Section>
            <PlaylistTracks items={tracks.items} />
          </Section>
        )}
      </div>
    </>
  );
}

export default PlaylistPage;
