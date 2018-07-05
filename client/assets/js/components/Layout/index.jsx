import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Me from '../Me';
import Navigation from '../Navigation';
import { fetchMe } from '../../actions/me';
import { ACCESS_TOKEN } from '../../constants/config';
import './style.css';

class Layout extends Component {
  componentDidMount() {
    const { fetchMe } = this.props;

    fetchMe(ACCESS_TOKEN);
  }

  render() {
    const { children, me } = this.props;

    return (
      <div className="layout">
        <Header>
          <Me {...me} />
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
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  fetchMe: PropTypes.func,
  me: PropTypes.shape(),
};

Layout.defaultProps = {
  children: null,
  fetchMe: () => {},
  me: null,
};

const mapStateToProps = state => ({
  ...state,
  me: state.me.me,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchMe,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
