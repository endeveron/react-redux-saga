import React from 'react';
import Post from '../Post/Post';

const Posts = ({ posts }) =>
  posts.length
    ? posts.map(p =>
      <Post
        key={ p.id }
        post={ p } />
    )
    : <p style={ { color: "#aaa" } }>No posts yet</p>

export default Posts;