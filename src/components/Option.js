import React from 'react';

const Option = (props) => (
  <div>
    <li>{props.optionText}</li>
    <button 
      className = "button button-link"
      onClick={(e) => {
      props.handleDeleteOption(props.optionText)
    }}
    >
      Delete
    </button>
  </div>
)

export default Option;