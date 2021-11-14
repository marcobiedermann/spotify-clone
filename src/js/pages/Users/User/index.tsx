import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import User from '../../../components/User';

interface Params {
  userId: string;
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

interface UserData {
  display_name: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
}

export type UserPageProps = RouteChildrenProps;

function UserPage(): JSX.Element {
  const { userId } = useParams<Params>();
  const { data, error } = useSWR<UserData>(`/v1/users/${userId}`);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { display_name } = data;

  return (
    <>
      <Helmet>
        <title>{display_name}</title>
      </Helmet>
      <User {...data} />
    </>
  );
}

export default UserPage;
