import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../../../actions/browse';
import Categories, { CategoriesProps } from '../../../components/Categories';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

export interface CategoriesPageProps extends RouteChildrenProps {
  accessToken: string;
  categories: CategoriesProps;
  error: {
    message: string;
  };
  fetchCategories: any;
  isLoading: boolean;
}

export class CategoriesPage extends Component<CategoriesPageProps> {
  componentDidMount() {
    const { accessToken, fetchCategories } = this.props;

    fetchCategories(accessToken);
  }

  render() {
    const { categories, error, isLoading } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>Categories</title>
        </Helmet>
        <Categories {...categories} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  categories: state.browse.categories,
  error: state.browse.error,
  isLoading: state.browse.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchCategories,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
