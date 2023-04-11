import React from 'react';
import { Helmet } from 'react-helmet';
import Categories from '../../../components/Categories';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { useBrowseCategories } from '../../../hooks/browse/categories';

function CategoriesPage(): JSX.Element {
  const { data, error, isError, isLoading } = useBrowseCategories();

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
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
}

export default CategoriesPage;
