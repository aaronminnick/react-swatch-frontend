import React from "react";
import Swatch from "./Swatch";
import FocusColor from "./FocusColor";

class SwatchControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: null
    }
  }
  
  changeSelectedColor = (color) => {
    this.setState({selectedColor: color});
  }
  
  render() {
    let focusColor;
    if (this.state.selectedColor !== null) {
      focusColor = <FocusColor color={this.state.selectedColor} />
    } else {
      focusColor = null;
    }

    return(
      <React.Fragment>
        <div id="chipContainer">
          <Swatch selectColorFunc={this.changeSelectedColor} />
        </div>
        {focusColor}
      </React.Fragment>
    );
  }
}

export default SwatchControl;