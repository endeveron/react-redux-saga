import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actionCreators';

const PostForm = props => {
  const initialInputs = {
    title: '',
    text: ''
  }

  const [inputs, setInputs] = useState(initialInputs)

  const inputHandler = e => {
    const t = e.target
    setInputs({
      ...inputs,
      [t.name]: t.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    if (!inputs.title || !inputs.text) return
    const newPost = {
      id: Date.now().toString(),
      title: inputs.title,
      text: inputs.text
    }
    props.createPost(newPost)
    setInputs(initialInputs)
  }

  return (
    <form onSubmit={ submitHandler } className="mb-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label mb-3">Title</label>
        <input
          type="text"
          name="title"
          value={ inputs.title }
          onChange={ inputHandler }
          className="form-control"
          id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label mb-3">Text</label>
        <input
          type="text"
          name="text"
          value={ inputs.text }
          onChange={ inputHandler }
          className="form-control"
          id="text" />
      </div>
      <button type="submit" className="btn btn-secondary mt-2">Add Post</button>
    </form>
  );
};

// OPT A - as a plain object
const mapDispatchToProps = {
  createPost
}

// OPT B - as a function
// const mapDispatchToProps = dispatch => ({
//   createPost: post => dispatch(createPost(post))
// })

export default connect(null, mapDispatchToProps)(PostForm);