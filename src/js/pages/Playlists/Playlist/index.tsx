import { formatDistance } from 'date-fns';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import Image from '../../../components/Image';
import Loader from '../../../components/Loader';
import Media, { MediaBody, MediaObject } from '../../../components/Media';
import PlaylistTracks from '../../../components/PlaylistTracks';
import { usePlaylist } from '../../../hooks/playlists';

const defaultImageSize = 240;

function PlaylistPage(): JSX.Element {
  const { playlistId } = useParams();
  const { data, error, isError, isLoading } = usePlaylist(playlistId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
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
        <Media>
          <MediaObject>
            <Image {...image} alt={name || ''} width={defaultImageSize} height={defaultImageSize} />
          </MediaObject>
          <MediaBody>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>
              <Link to={`/users/${owner?.id}`}>{owner?.display_name}</Link> · {tracks?.total} songs,{' '}
              {formatDistance(0, totalDuration)}
            </p>
            <p>
              <Button>Play</Button>
            </p>
          </MediaBody>
        </Media>
        {tracks && <PlaylistTracks items={tracks.items} />}
      </div>
    </>
  );
}

export default PlaylistPage;
