import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Category, Error, Loader } from '../../../../components';
import { useBrowseCategory } from '../../../../hooks/browse/categories';

function CategoryPage(): JSX.Element {
  const { categoryId } = useParams();
  const { data, error, isError, isPending } = useBrowseCategory(categoryId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
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
