import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Artists from '../../../../components/Artists';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

interface Params {
  artistId: string;
}

interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Followers {
  href: null;
  total: number;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface RelatedArtistsData {
  artists: Artist[];
}

const RelatedArtistsPage: FC<RouteChildrenProps> = () => {
  const { artistId } = useParams<Params>();
  const { data, error } = useSWR<RelatedArtistsData>(`/v1/artists/${artistId}/related-artists`);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { artists } = data;

  return (
    <>
      <Helmet>
        <title>Related Artists</title>
      </Helmet>
      <Artists artists={artists} />
    </>
  );
};

export default RelatedArtistsPage;
