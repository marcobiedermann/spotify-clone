import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useMePlaylists } from '../../hooks/me';
import Aside from '../Aside';
import Content from '../Content';
import Error from '../Error';
import Header from '../Header';
import Loader from '../Loader';
import Main from '../Main';
import Navigation from '../Navigation';
import Player from '../Player';
import Search from '../Search';
import styles from './Layout.module.css';

export interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  const { data, error } = useMePlaylists();

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { items } = data;

  return (
    <div className={styles.layout}>
      <Header>
        <Search onSubmit={() => console.log('Search')} />
        {/* <Me {...me} /> */}
      </Header>
      <Content>
        <Main>{children}</Main>
        <Aside>
          <Navigation />
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <Link to={`/playlists/${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </Aside>
      </Content>
      <Player />
    </div>
  );
}

export default Layout;
