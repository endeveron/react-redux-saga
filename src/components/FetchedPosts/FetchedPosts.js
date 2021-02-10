import React from 'react'
import Post from '../Post/Post'

const FetchedPosts = ({ posts }) =>
  posts.length
    ? posts.map(p =>
      <Post
        key={ p.id }
        post={ p } />
    )
    : <button className="btn btn-light">Fetch Posts</button>

export default FetchedPosts