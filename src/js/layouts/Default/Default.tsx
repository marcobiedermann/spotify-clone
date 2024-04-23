import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  Aside,
  Content,
  Error,
  Header,
  Image,
  Loader,
  Main,
  Navigation,
  Player,
  Search,
} from '../../components';
import { useMePlaylists } from '../../hooks/me';
import styles from './Default.module.css';
import Logo from '../../components/Logo';

function DefaultLayout(): JSX.Element {
  const { data, error, isError, isPending } = useMePlaylists();

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
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
          <Logo />
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
              {
                id: 'search',
                name: 'Search',
                path: '/search',
              },
            ]}
          />
          <div
            style={{
              padding: '1em 1.5em',
            }}
          >
            <hr />
          </div>
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
