import React from 'react';
import { makeApiCall } from '../actions/index';
import { connect } from 'react-redux';

function ColorSelectForm(props) {

  function onFormSubmit(event) {
    event.preventDefault();
    const { dispatch } = props;
    
    const colors = [];
    colors.push(event.target.color1.value.substring(1).toUpperCase());
    colors.push(event.target.color2.value.substring(1).toUpperCase());
    if (props.mode === 4) {
      colors.push(event.target.color3.value.substring(1).toUpperCase());
      colors.push(event.target.color4.value.substring(1).toUpperCase());
    }

    const steps = event.target.steps.value;
    dispatch(makeApiCall(steps, ...colors));
  }

  const inputs = [];

  for(let i = 1; i <= props.mode; i ++) {
    inputs.push(
      <label>Color {i}: 
          <input 
            type="color"
            name={`color${i}`}
            required
            key={i}
          />
        </label>
    );
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        {inputs}
        <label> Number of Between Colors: 
          <input 
            type="number"
            name="steps"
            min="1"
            max="10"
            step="1"
            required
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode
  };
};

ColorSelectForm = connect(mapStateToProps)(ColorSelectForm);

export default ColorSelectForm;