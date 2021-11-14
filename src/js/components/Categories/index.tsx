import classNames from 'classnames';
import React from 'react';
import Category, { CategoryProps } from '../Category';
import styles from './style.module.css';

export interface CategoriesProps {
  className?: string;
  items?: CategoryProps[];
}

function Categories(props: CategoriesProps): JSX.Element {
  const { className, items = [] } = props;

  return (
    <ul className={classNames(className, styles.categories)}>
      {items.map((category) => (
        <li key={category.id}>
          <Category {...category} />
        </li>
      ))}
    </ul>
  );
}

export default Categories;
