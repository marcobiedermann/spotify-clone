import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
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
  const { data, error, isError, isLoading } = useMePlaylists();

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
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
          <Navigation
            items={[
              {
                id: 'home',
                name: 'Home',
                path: '/',
              },
              {
                id: 'browse',
                name: 'Browse',
                path: '/browse',
              },
            ]}
          />
          <Navigation
            items={items.map((item) => {
              const { id = '', name = '' } = item;

              return {
                id,
                name,
                path: `/playlists/${item.id}`,
              };
            })}
          />
        </Aside>
      </Content>
      <Player />
    </div>
  );
}

export default DefaultLayout;
