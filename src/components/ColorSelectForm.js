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

  const FormStyles = {
    button: {
      border: 'none',
      borderRadius: '.25em',
      backgroundColor: '#454875',
      color:'white'
      // mixBlendMode: 'difference'
    },
    colordiv: {
      display: "inline-block"
    },
    label: {
      display: "block"
    },
    input: {
      height: "4em",
      width: "6em",
    }
  };

  const inputs = [];

  // {'\u00A0'} 
  for(let i = 1; i <= props.mode; i ++) {
    inputs.push(
      <div style={FormStyles.colordiv}>
        <label style={FormStyles.label} for={`color${i}`}>Color {i}: </label>
            <input style={FormStyles.input} 
              type="color"
              name={`color${i}`}
              id={`color${i}`}
              required
              key={i}
            />
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        {inputs}
        <br/>
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
        <button style={FormStyles.button}type='submit'>Submit</button>
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