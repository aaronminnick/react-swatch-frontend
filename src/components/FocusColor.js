import React from 'react';

function FocusColor(props) {

  const FocusColorStyles = {
    div: {
      backgroundColor: `#${props.color.Hex}`
    }
  }

  return (
    <div>
      <div style={FocusColorStyles.div} />
      <p>Hex: {props.color.Hex}</p>
      <p>RGB: {props.color.Red}, {props.color.Green}, {props.color.Blue}</p>
    </div>
  );
}

export default FocusColor;