import React from 'react';
import { makeApiCall } from '../actions/index';
import { connect } from 'react-redux';

function ColorSelectForm(props) {

  function onFormSubmit(event){
    event.preventDefault();
    const { dispatch } = props;
    const startColor = event.target.startColor.value.substring(1).toUpperCase();
    const endColor = event.target.endColor.value.substring(1).toUpperCase();
    const steps = event.target.steps.value;
    dispatch(makeApiCall(steps, startColor, endColor));
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label> Starting Color: 
          <input 
            type="color"
            name="startColor"
            required
          />
        </label>
        <label> Ending Color: 
          <input 
            type="color"
            name="endColor"
            required
          />
        </label>
        <label> Number of Colors: 
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

ColorSelectForm = connect()(ColorSelectForm);

export default ColorSelectForm;