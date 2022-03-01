import React from 'react';
import { updateMode } from '../actions/index';
import { useDispatch } from 'react-redux';

function Header() {

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <button onClick={() => dispatch(updateMode(2))}>Two Colors</button>
      <button onClick={() => dispatch(updateMode(4))}>Four Colors</button>
    </React.Fragment>
  );
}

export default Header;