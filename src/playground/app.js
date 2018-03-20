class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if(options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }

  }

  componentWillUnmount() {
    console.log('Component will unmount')
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  handlePick () {
  
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    };
  

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
};

Header.defaultProps = {
  title: 'Indecision'
}

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {

    return (
      <div>
        <button 
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );

}

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button 
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }

// }

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

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <ol>
//         {
//           this.props.options.map((option, keyNum) => <Option key={keyNum} optionText={option}/>)
//           // this.props.options.map((listItem, i) => {
//           //   return <li key={i}>{listItem}</li>;
//           // })
//         }
//         </ol>
//         <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      <li>{props.optionText}</li>
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}>Delete</button>
    </div>
  )
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <li>{this.props.optionText}</li>
//       </div>
//     )
//   }
// }

class AddOption extends React.Component {
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

const User = () => {
  return (
    <div>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  )
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));