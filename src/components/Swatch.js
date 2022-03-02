import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Swatch(props) {
  
  const ColorChipStyle = {
    margin: '0',
    display: "inline-block"
  };
  
  var body = document.body;
  body.style.setProperty("--chip-dimension", `calc(65vh / ${props.colors.length})`);
  const vhToPx = window.innerHeight/100;
  var chipContainer = document.getElementById("chipContainer") || {clientWidth: 0};
  var checkWidth = chipContainer.clientWidth > (65 * vhToPx * .9);

  const classNames = {
    enter: checkWidth ? 'chip-expanded-enter' : 'chip-enter',
    enterActive: checkWidth ? 'chip-expanded-enter-active' : 'chip-enter-active',
    enterDone: 'chip-enter-done'
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
          borderRadius: "8px",
          width: "fit-content"}}>
          {props.colors.flat().map((chip) =>
            <CSSTransition key={v4()}
            in={true}
            classNames={classNames}
            timeout={500}>
              <div style={{...ColorChipStyle,
                backgroundColor: `#${chip.Hex}`}}
                onClick={() => props.selectColorFunc(chip)}
                />
            </CSSTransition>
          )}
        </div>;
        // console.log(65*vhToPx, chipContainer.clientWidth, (chipContainer.clientWidth > (65 * vhToPx * .9)));
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