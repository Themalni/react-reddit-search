import React, { Component } from 'react';
import { MasonryContainer } from '../Container/Container';
import { Card, CardHeader, CardTitle, CardBody, CardText, CardSmallText, CardFooter, CardImage, CardImageSmall } from '../Card/Card';
import { LinkButton } from '../Button/Button';
import { connect } from 'react-redux';
import { fetchPosts, isLoadingStateChange } from '../../actions/postsActions';
import PropTypes from 'prop-types';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    this.forceUpdate()
  }
  truncateString(text, limit) {
    const shortened = text.indexOf(" ", limit);
    if (shortened === -1) return text;
    return text.substring(0, shortened) + " ...";
  }
  render() {
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <Card key={post.id}>
            <CardHeader>
              {post.subreddit_name_prefixed}
            </CardHeader>
            <CardBody>
              <CardTitle>
                {this.truncateString(post.title, 80)}
              </CardTitle>
              <CardSmallText>
                Posted by: {post.author}
              </CardSmallText>
              {post.preview ? <CardImage src={post.preview.images[0].source.url} /> : <CardImageSmall src={'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg'} />}
              <CardText>
                {this.truncateString(post.selftext, 200)}
              </CardText>
            </CardBody>
            <CardFooter>
              <LinkButton isBlue href={`https://www.reddit.com${post.permalink}`} target="_blank">Read more</LinkButton>
            </CardFooter>
          </Card>
        )
      })
    ) : null
    return (
      <MasonryContainer>
        {postList}
      </MasonryContainer>
    )
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items,
    searchTerm: state.search.searchTerm.search,
    isLoading: state.posts.isLoading,
    postsNotFound: state.posts.postsNotFound
  }
}

export default connect(mapStateToProps, { fetchPosts, isLoadingStateChange })(Post)