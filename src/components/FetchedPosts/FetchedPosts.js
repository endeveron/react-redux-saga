import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Post from '../Post/Post'
import { fetchPosts } from '../../redux/actionCreators'
import Loader from '../Loader/Loader'

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const fetchedPosts = useSelector(state => state.post.fetchedPosts)
  const loading = useSelector(state => state.UI.loading)

  return loading
    ? <Loader />
    : fetchedPosts.length
      ? fetchedPosts.map(p =>
        <Post
          key={ p.id }
          post={ p } />)
      : <button
        onClick={ () => dispatch(fetchPosts()) }
        className="btn btn-light">Fetch Posts</button>
}


export default FetchedPosts