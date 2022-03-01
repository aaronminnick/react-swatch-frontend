import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function Swatch(props) {

  const scalingFactor = (document.getElementById("chipContainer")) ? 
  document.getElementById("chipContainer").offsetWidth*.99/props.colors.length : "1em";
  const ColorChipStyle = {
    width: scalingFactor, 
    height: scalingFactor,
    display: "inline-block"
  };
  
  let content;
  if (props.isLoading) {
    content = <div>Loading...</div>;
  } else {
    if (props.colors.length > 0) {
      content = props.colors.map(c => {
        return <div style={{...ColorChipStyle,
          backgroundColor: `#${c.Hex}`}}
          onClick={() => props.selectColorFunc(c)}
          key={v4()}>
        </div>
      })
    } else {
      content = <div />;
    }
    if (props.error != null) {
      content = <div>{props.error}</div>;
    }
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    colors: state.colors,
    error: state.error
  };
};

Swatch = connect(mapStateToProps)(Swatch);

export default Swatch;