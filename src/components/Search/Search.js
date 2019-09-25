import React, { Component } from 'react';
import { Container } from '../Container/Container';
import Form from '../Form/Form';
import { InputText } from '../Input/Input';
import { Button } from '../Button/Button';
import { connect } from 'react-redux';
import { searchPosts } from '../../actions/searchActions';
import { fetchPosts, isLoadingStateChange, postsNotFoundChangeState } from '../../actions/postsActions';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.postsNotFoundChangeState(false);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const searchTerm = {
      search: this.state.search
    }
    this.props.searchPosts(searchTerm)
    this.props.fetchPosts()
    this.props.isLoadingStateChange(true)
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <InputText type="text" placeholder="Enter search term..." name="search" onChange={this.onChange} value={this.state.search} required />
          <Button>Search</Button>
        </Form>
      </Container>
    )
  }
}

Search.propTypes = {
  searchPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
    posts: state.posts.items,
    postsNotFound: state.posts.postsNotFound
  }
}

export default connect(mapStateToProps, { searchPosts, fetchPosts, isLoadingStateChange, postsNotFoundChangeState })(Search)