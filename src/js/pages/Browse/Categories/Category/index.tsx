import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Category from '../../../../components/Category';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import { useBrowseCategory } from '../../../../hooks/browse/categories';

function CategoryPage(): JSX.Element {
  const { categoryId } = useParams();
  const { data, error } = useBrowseCategory(categoryId);

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
