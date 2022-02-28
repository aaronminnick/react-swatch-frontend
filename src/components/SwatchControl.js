import React from "react";
import Swatch from "./Swatch";
import FocusColor from "./FocusColor";

class SwatchControl extends React.Component {
  
  SwatchControl(props) {
    super(props);
    this.state = {
      selectedColor: null
    }
  }

  changeSelectedColor(color) {
    this.setState(() => {
      return {selectedColor: color};
    });
  }

  render() {
    return(
      <React.Fragment>
        <Swatch selectColorFunc={this.changeSelectedColor} />
        <FocusColor color={this.state.selectedColor} />
      </React.Fragment>
    );
  }
}

export default SwatchControl;