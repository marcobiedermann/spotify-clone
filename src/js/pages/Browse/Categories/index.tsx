import { Helmet } from 'react-helmet';
import { Categories, Error, Loader } from '../../../components';
import { useBrowseCategories } from '../../../hooks/browse/categories';

function CategoriesPage(): JSX.Element {
  const { data, error, isError, isPending } = useBrowseCategories();

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
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
