import PropTypes from 'prop-types';
import React from 'react';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import './style.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Header>
      Header
    </Header>
    <Content>
      <Main>
        {children}
      </Main>
      <Aside>
        <Navigation />
      </Aside>
    </Content>
    <Footer>
      Footer
    </Footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
