import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import H1 from './components/H1/H1';
import Search from './components/Search/Search';
import Post from './components/Post/Post';
import { connect } from 'react-redux';
import Loader from './components/Loader/Loader'
import { LowerContainer } from './components/Container/Container';
import H2 from './components/H2/H2'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {

    return (
      <Layout>
        <H1 isLarge>Search Reddit app</H1>
        <Search></Search>
        {this.props.postsNotFound ? <H2>Sorry, nothing found for "{this.props.searchTerm}"</H2> : null}
        {this.props.isLoading ? <LowerContainer><Loader /></LowerContainer> : null}
        {this.props.postsFound ? <Post /> : null}
      </Layout >
    );
  }
}

const mapStateToProps = (state) => {
  console.log("SearchTerm:", state.search.searchTerm)
  return {
    postsFound: state.posts.postsFound,
    postsNotFound: state.posts.postsNotFound,
    isLoading: state.posts.isLoading,
    searchTerm: state.search.searchTerm.search
  }
}

export default connect(mapStateToProps)(App)