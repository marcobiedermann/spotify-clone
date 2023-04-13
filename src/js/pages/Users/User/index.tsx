import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Error, Loader, User } from '../../../components';
import { useUsersProfile } from '../../../hooks/users';

function UserPage(): JSX.Element {
  const { userId } = useParams();
  const { data, error, isError, isLoading } = useUsersProfile(userId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
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
