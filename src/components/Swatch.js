import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function Swatch(props) {

  let content;

  const ColorChipStyle = {
    width: `calc(100% / ${props.colors.length})`, 
    height: "2em",
    display: "inline-block"
  };

  if (props.isLoading) {
    content = <div>Loading...</div>;
  } else {
    if (props.colors.length > 0) {
      console.log(props.colors);
      content = props.colors.map(c => {
        console.log(c);
        return <div style={{...ColorChipStyle,
          backgroundColor: `#${c.Hex}`}}
          onClick={() => props.selectColorFunc(c)}
          key={v4()}>
        </div>
      })
      console.log("content after map", content);
    } else {
      content = <div >Else block</div>;
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

//{Array.isArray(content)?content.map(c=>c):content}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    colors: state.colors,
    error: state.error
  };
};

Swatch = connect(mapStateToProps)(Swatch);

export default Swatch;