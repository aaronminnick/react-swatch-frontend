import React from 'react';
import { updateMode } from '../actions/index';
import { useDispatch } from 'react-redux';

function Header() {

  const dispatch = useDispatch();
  const HeaderStyles={
    button: {
      border: 'none',
      borderRadius: '.25em',
      backgroundColor: '#454875',
      color:'white',
      margin:'.25em'
      // mixBlendMode: 'difference'
    }
  }
  
  return (
    <React.Fragment>
      <button style={HeaderStyles.button} onClick={() => dispatch(updateMode(2))}>Two Colors</button>
      <button style={HeaderStyles.button} onClick={() => dispatch(updateMode(4))}>Four Colors</button>
    </React.Fragment>
  );
}

export default Header;