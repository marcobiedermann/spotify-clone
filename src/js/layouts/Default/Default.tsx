import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useMePlaylists } from '../../hooks/me';
import Aside from '../../components/Aside';
import Content from '../../components/Content';
import Error from '../../components/Error';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';
import Player from '../../components/Player';
import Search from '../../components/Search';
import styles from './Default.module.css';

function DefaultLayout(): JSX.Element {
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
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
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

export default DefaultLayout;
