import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import Tracks from '../../../../components/Tracks';

interface Params {
  artistId: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
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

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface ExternalIds {
  isrc: string;
}

interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface TopTracksData {
  tracks: Track[];
}

const TopTracksPage: FC<RouteChildrenProps> = () => {
  const { artistId } = useParams<Params>();
  const { data, error } = useSWR<TopTracksData>(`/v1/artists/${artistId}/top-tracks?market=DE`);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { tracks } = data;

  return (
    <>
      <Helmet>
        <title>Top Tracks</title>
      </Helmet>
      <Tracks tracks={tracks} />
    </>
  );
};

export default TopTracksPage;
