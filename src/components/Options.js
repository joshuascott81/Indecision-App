import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
      <div>
        <ol>
        {
          props.options.map((option, keyNum) => (
            <Option 
              key={keyNum} 
              optionText={option} 
              handleDeleteOption={props.handleDeleteOption} 
            />
          ))
        }
        {props.options.length === 0 && <p>Please add an option to get started.</p>}
        </ol>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
      </div>
    );
  };

  export default Options;