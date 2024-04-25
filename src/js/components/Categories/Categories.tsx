import clsx from 'clsx';
import Category, { CategoryProps } from '../Category';
import styles from './Categories.module.css';

export interface CategoriesProps {
  className?: string;
  items: CategoryProps[];
}

function Categories(props: CategoriesProps): JSX.Element {
  const { className, items } = props;

  return (
    <ul className={clsx(className, styles.categories)}>
      {items.map((category) => (
        <li key={category.id}>
          <Category {...category} />
        </li>
      ))}
    </ul>
  );
}

export default Categories;
