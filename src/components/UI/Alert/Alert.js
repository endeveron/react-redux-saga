import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../../../redux/actionCreators';

const Alert = () => {
  const { show, text } = useSelector(state => state.UI.alert)
  const dispatch = useDispatch()

  return show &&
    <div
      onClick={ () => dispatch(hideAlert()) }
      className="alert alert-danger alert-dismissible fade show" role="alert">
      { text }
    </div>
};

export default Alert;