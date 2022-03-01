import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function Swatch(props) {

  let content;

  if (props.isLoading) {
    content = <div>Loading...</div>;
  } else {
    if (props.colors.length > 0) {
      props.colors.map(c => 
        <div style={{
          backgroundColor: `#${c.Hex}`, 
          width: `calc(100% / ${props.colors.length})`, 
          height: "2em"
        }}
        onClick={props.selectColorFunc(c)}
        key={v4()}>
        </div>
      )
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