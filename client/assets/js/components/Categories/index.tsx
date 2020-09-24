import classNames from 'classnames';
import React, { FC } from 'react';
import Category, { CategoryProps } from '../Category';
import styles from './style.css';

export interface CategoriesProps {
  items: {
    categories: CategoryProps[];
  };
  className?: string;
}

const Categories: FC<CategoriesProps> = (props) => {
  const { items, className } = props;

  return (
    <ul className={classNames(className, styles.categories)}>
      {items.categories.map((category) => (
        <li key={category.id}>
          <Category {...category} />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
