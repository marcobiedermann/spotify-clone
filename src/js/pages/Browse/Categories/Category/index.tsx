import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Category from '../../../../components/Category';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

interface Icon {
  height: number;
  url: string;
  width: number;
}

interface PlaylistData {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

function CategoryPage(): JSX.Element {
  const { categoryId } = useParams();
  const { data, error } = useSWR<PlaylistData>(`/v1/browse/categories/${categoryId}`);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { name } = data;

  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Category {...data} />
    </>
  );
}

export default CategoryPage;
