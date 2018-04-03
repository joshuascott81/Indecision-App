import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
  
    handleAddOption(event) {
      event.preventDefault();
  
      const newOption = event.target.elements.newOption.value.trim();
      const error = this.props.handleAddOption(newOption);
      
      this.setState(() => ({ error }));
  
      if (!error) {
        event.target.elements.newOption.value = '';
      }
  
    }
  
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form 
            onSubmit={this.handleAddOption}
          >
            <input type='text' name='newOption' />
            <button>Add Option</button>
          </form>
        </div>
      )
    }
  }