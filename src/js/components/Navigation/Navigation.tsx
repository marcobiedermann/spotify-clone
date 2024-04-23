import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

interface Item {
  id: string;
  name: string;
  path: string;
  items?: Item[];
}

interface NavigationListProps {
  items: Item[];
}

function NavigationList(props: NavigationListProps): JSX.Element {
  const { items } = props;

  return (
    <ul className={styles.navigation__list}>
      {items.map((item) => {
        const { id, name, path } = item;

        return (
          <li key={id}>
            <Link className={styles.navigation__link} to={path}>
              {name}
            </Link>
            {item.items && <NavigationList items={item.items} />}
          </li>
        );
      })}
    </ul>
  );
}

interface NavigationProps {
  items: Item[];
}

function Navigation(props: NavigationProps): JSX.Element {
  const { items } = props;

  return (
    <nav>
      <NavigationList items={items} />
    </nav>
  );
}

export type { NavigationProps };
export default Navigation;
