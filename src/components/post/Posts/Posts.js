import React from 'react';
import { connect } from 'react-redux'

import Post from '../Post/Post';

const Posts = ({ posts }) =>
  posts.length
    ? posts.map(p =>
      <Post
        key={ p.id }
        post={ p } />
    )
    : <p style={ { color: "#aaa" } }>No posts yet</p>

const mapStateToProps = state => ({
  posts: state.post.posts
})

export default connect(mapStateToProps, null)(Posts);