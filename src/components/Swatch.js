import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Swatch(props) {
  const scalingFactor = (document.getElementById("chipContainer")) ? 
  document.getElementById("chipContainer").offsetWidth/props.colors.length : "1em";
  const ColorChipStyle = {
    width: "auto", //`calc(100% / ${props.colors.length})`, 
    height: `calc(65vh / ${props.colors.length})`,
    margin: '0',
    display: "inline-block"
  };
  
  let content;
  if (props.isLoading) {
    content = <div>Loading...</div>;
  } else {
    if (props.colors.length > 0) {
        content = <div style={{display: "grid", 
          gridTemplateColumns:`repeat(${props.colors.length} , 1fr)`,
          gridGap:'0',
          border: "5px solid rgb(30, 30, 30)",
          borderRadius: "8px"}}>
          {props.colors.flat().map((chip) =>
            <CSSTransition key={v4()}
            in={true}
            classNames="chip"
            timeout={500}>
              <div style={{...ColorChipStyle,
                backgroundColor: `#${chip.Hex}`}}
                onClick={() => props.selectColorFunc(chip)}
                />
            </CSSTransition>
          )}
        </div>;
    } else {
      content = <div />;
    }
    if (props.error != null) {
      content = <div>{props.error}</div>;
    }
  }

  return (
    <React.Fragment>
      <TransitionGroup>
        {content}
      </TransitionGroup>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    colors: state.colors,
    error: state.error,
    mode: state.mode
  };
};

Swatch = connect(mapStateToProps)(Swatch);

export default Swatch;