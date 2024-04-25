import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Content, Loader, Main, Player } from '../../components';
import styles from './Blank.module.css';

function BlankLayout(): JSX.Element {
  return (
    <div className={styles.layout}>
      <Content>
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
      </Content>
      <Player />
    </div>
  );
}

export default BlankLayout;
