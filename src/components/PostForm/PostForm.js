import React, { useState } from 'react';

const PostForm = props => {
  const [state, setState] = useState({})

  const submitHandler = e => {
    e.preventDefault()
    console.log('Sbm')
  }

  return (
    <form onSubmit={ submitHandler } className="mb-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label mb-3">Post Title</label>
        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-secondary mt-2">Add Post</button>
    </form>
  );
};

export default PostForm;