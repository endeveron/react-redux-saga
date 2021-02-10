import React from 'react';

const Post = ({ post }) => {
  return (
    <div className='card my-2'>
      <div className='card-body'>
        <h5 className='card-title'>{ post.title ? post.title : `Post ${ post.id } Title` }</h5>
        <p className='card-text'>{ post.text }</p>
      </div>
    </div>
  );
};

export default Post;