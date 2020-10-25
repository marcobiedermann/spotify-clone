import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Link, RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import Track from '../../../components/Track';

interface Params {
  playlistId: string;
}

const PlaylistPage: FC<RouteChildrenProps> = () => {
  const { playlistId } = useParams<Params>();
  const { data, error } = useSWR(`/v1/playlists/${playlistId}`);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { name, owner, tracks } = data;

  return (
    <>
      <Helmet>
        <title>Playlist</title>
      </Helmet>
      <div>
        <p>Playlist</p>
        <h1>{name}</h1>
        <p>
          Created by <Link to={`/users/${owner.id}`}>{owner.display_name}</Link> · {tracks.total}{' '}
          songs
        </p>
        <p>
          <Button>Play</Button>
        </p>
        <table>
          <tbody>
            {tracks.items.map((track) => (
              <Track key={track.track.id} {...track.track} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlaylistPage;
