import React from 'react';

function FocusColor(props) {

  let content;
  const FocusColorStyles = {
    div: {
      display: 'inline-block',
      borderRadius: '1em',
      padding: "1em"
    }
  }

  return (
    <div>
      {props.color.map(c => 
        <div style={{...FocusColorStyles.div, backgroundColor: `#${c.Hex}`}}>
        <p style={{color: (c.Red + c.Green + c.Blue) / 3 > 120 ? 'black' : 'white'}}>Hex: {c.Hex}</p>
        <p style={{color: (c.Red + c.Green + c.Blue) / 3 > 120 ? 'black' : 'white'}}>RGB: {c.Red}, {c.Green}, {c.Blue}</p>
        </div>
      )}
    </div>
  );
}

export default FocusColor;