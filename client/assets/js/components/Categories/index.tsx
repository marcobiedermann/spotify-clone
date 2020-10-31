import classNames from 'classnames';
import React, { FC } from 'react';
import Category, { CategoryProps } from '../Category';
import styles from './style.module.css';

export interface CategoriesProps {
  className?: string;
  items?: CategoryProps[];
}

const Categories: FC<CategoriesProps> = (props) => {
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
};

export default Categories;
