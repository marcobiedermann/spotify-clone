import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import User from '../../../components/User';
import { useUser } from '../../../hooks/users';

function UserPage(): JSX.Element {
  const { userId } = useParams();
  const { data, error } = useUser(userId);

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
