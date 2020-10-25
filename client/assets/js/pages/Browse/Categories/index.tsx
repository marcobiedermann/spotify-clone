import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';
import useSWR from 'swr';
import Categories from '../../../components/Categories';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

interface Categories {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

interface Icon {
  height: number | null;
  url: string;
  width: number | null;
}

interface Item {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

interface CategoriesData {
  categories: Categories;
}

const CategoriesPage: FC<RouteChildrenProps> = () => {
  const { data, error } = useSWR<CategoriesData>('/v1/browse/categories');

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { categories } = data;

  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <Categories items={categories.items} />
    </>
  );
};

export default CategoriesPage;
