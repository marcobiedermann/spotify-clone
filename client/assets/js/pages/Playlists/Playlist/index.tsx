import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Link, RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import Image from '../../../components/Image';
import Loader from '../../../components/Loader';
import Media, { MediaBody, MediaObject } from '../../../components/Media';
import Track from '../../../components/Track';

interface Params {
  playlistId: string;
}

interface Album {
  album_type: string;
  artists: Owner[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface ExternalIds {
  isrc: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Followers {
  href: null;
  total: number;
}

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

interface Item {
  added_at: string;
  added_by: Owner;
  is_local: boolean;
  primary_color: null;
  track: Track;
  video_thumbnail: VideoThumbnail;
}

interface Owner {
  display_name?: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  name?: string;
}

interface Track {
  album: Album;
  artists: Owner[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  items: Item[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

interface VideoThumbnail {
  url: null;
}

interface PlaylistData {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

const PlaylistPage: FC<RouteChildrenProps> = () => {
  const { playlistId } = useParams<Params>();
  const { data, error } = useSWR<PlaylistData>(`/v1/playlists/${playlistId}`);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { description, images, name, owner, tracks } = data;

  return (
    <>
      <Helmet>
        <title>Playlist</title>
      </Helmet>
      <div>
        <Media>
          <MediaObject>
            <Image url={images[0].url} alt={name} width={240} height={240} />
          </MediaObject>
          <MediaBody>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>
              Created by <Link to={`/users/${owner.id}`}>{owner.display_name}</Link> ·{' '}
              {tracks.total} songs
            </p>
            <p>
              <Button>Play</Button>
            </p>
          </MediaBody>
        </Media>
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
