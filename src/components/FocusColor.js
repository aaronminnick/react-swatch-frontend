import React from 'react';

function FocusColor(props) {

  const FocusColorStyles = {
    div: {
      display: 'inline-block',
      paddingLeft: ".5em",
      paddingRight: ".5em",
      margin: ".05em",
      borderRadius: '.2em .2em .5em .5em'
      
    },
    div2: {
      display: 'inline-block',
      alignContents:'center',
      margin: ".05em",
      display: 'grid',
      gridTemplateColumns: "repeat(2, 1fr)"
    }
  }

  return (
    <div style={FocusColorStyles.div2}>
      {props.color.map(c => 
        <div style={{...FocusColorStyles.div, backgroundColor: `#${c.Hex}`}}>
          <p style={{color: ((c.Red + c.Green + c.Blue) / 3 > 120) ? 'black' : 'white'}}>
            Hex: {c.Hex}{'\u00A0'}
            Red: {c.Red}{'\u00A0'}
            Green: {c.Green}{'\u00A0'}
            Blue: {c.Blue}
          </p>
        </div>
      )}
    </div>
  );
}

export default FocusColor;