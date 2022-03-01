import React from "react";
import Swatch from "./Swatch";
import FocusColor from "./FocusColor";

class SwatchControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedColors: []
    }
  }
  addSelectedColor = (color) => {
    const maxColorConstant = 8;
    let newSelectedColors = [...this.state.selectedColors];
    if (!newSelectedColors.includes(color)){
      if(newSelectedColors.unshift(color) > maxColorConstant )newSelectedColors.pop();
      this.setState({selectedColors: newSelectedColors});
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  
  render() {
    let focusColor;
    if (this.state.selectedColor !== null) {
      focusColor = <FocusColor color={this.state.selectedColors} />
    } else {
      focusColor = null;
    }

    return(
      <React.Fragment>
        <div id="chipContainer">
          <Swatch selectColorFunc={this.addSelectedColor} />
        </div>
        {focusColor}
      </React.Fragment>
    );
  }
}

export default SwatchControl;