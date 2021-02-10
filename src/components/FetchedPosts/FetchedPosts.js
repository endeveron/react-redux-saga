import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Post from '../Post/Post'
import { fetchPosts } from '../../redux/actionCreators'

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const fetchedPosts = useSelector(state => state.post.fetchedPosts)

  return (fetchedPosts.length
    ? fetchedPosts.map(p =>
      <Post
        key={ p.id }
        post={ p } />
    )
    : <button
      onClick={ () => dispatch(fetchPosts()) }
      className="btn btn-light">Fetch Posts</button>)
}


export default FetchedPosts