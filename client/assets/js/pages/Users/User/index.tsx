import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../../actions/users';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import User from '../../../components/User';

export interface UserPageProps extends RouteChildrenProps {
  accessToken: string;
  error: {
    message: string;
  };
  fetchUser: any;
  isLoading: boolean;
  me: {
    me: {
      display_name: string;
    };
  };
}

export class UserPage extends Component<UserPageProps> {
  componentDidMount() {
    const { accessToken, fetchUser } = this.props;
    const { userId } = useParams();

    fetchUser(accessToken, userId);
  }

  render() {
    const { error, isLoading, me } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>{me.me.display_name}</title>
        </Helmet>
        <User {...me.me} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  error: state.users.error,
  isLoading: state.users.isLoading,
  user: state.users.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUser,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
