import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Category from '../../../../components/Category';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

interface Params {
  categoryId: string;
}

const CategoryPage: FC<RouteChildrenProps> = () => {
  const { categoryId } = useParams<Params>();
  const { data, error } = useSWR(`/v1/browse/categories/${categoryId}`);

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
};

export default CategoryPage;
