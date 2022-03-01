import React from 'react';

function FocusColor(props) {

  let content;
  
  const FocusColorStyles = {
    div: {
      // backgroundColor: `#${props.color.Hex}`,
      // height:'1em',
      // width: '1em',
      display: 'inline-block',
      border: `solid #${props.color.Hex} 20px`,
      borderRadius: '15%',
      padding: "1em"
    }
  }

  return (
    <div>
      <div style={FocusColorStyles.div}>
      <p>Hex: {props.color.Hex}</p>
      <p>RGB: {props.color.Red}, {props.color.Green}, {props.color.Blue}</p>
      </div>
    </div>
  );
}

export default FocusColor;