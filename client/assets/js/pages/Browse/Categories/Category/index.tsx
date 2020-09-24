import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCategory } from '../../../../actions/browse';
import Category, { CategoryProps } from '../../../../components/Category';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

export interface CategoryPageProps extends RouteChildrenProps {
  accessToken: string;
  category: CategoryProps;
  error: {
    message: string;
  };
  fetchCategory: any;
  isLoading: boolean;
}

export class CategoryPage extends Component<CategoryPageProps> {
  componentDidMount() {
    const { accessToken, fetchCategory } = this.props;
    const { categoryId } = useParams();

    fetchCategory(accessToken, categoryId);
  }

  render() {
    const { category, error, isLoading } = this.props;

    if (error) {
      return <Error>{error.message}</Error>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Helmet>
          <title>{category.name}</title>
        </Helmet>
        <Category {...category} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  category: state.browse.category,
  error: state.browse.error,
  isLoading: state.browse.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchCategory,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
