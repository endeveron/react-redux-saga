import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, hideAlert, showAlert } from '../../../redux/actionCreators';

const PostForm = props => {
  const initialInputs = {
    title: '',
    text: ''
  }

  const [inputs, setInputs] = useState(initialInputs)
  const alert = useSelector(state => state.UI.alert.show)
  const dispatch = useDispatch()

  const inputHandler = e => {
    const t = e.target
    setInputs({
      ...inputs,
      [t.name]: t.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    if (!inputs.title || !inputs.text) {
      dispatch(showAlert('Please fill out all the fields'))
      return
    }
    if (alert) dispatch(hideAlert())

    const newPost = {
      id: Date.now().toString(),
      title: inputs.title,
      text: inputs.text
    }
    dispatch(createPost(newPost))
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
// const mapDispatchToProps = {
//   createPost
// }

// OPT B - as a function
// const mapDispatchToProps = dispatch => ({
//   createPost: post => dispatch(createPost(post))
// })

export default PostForm;