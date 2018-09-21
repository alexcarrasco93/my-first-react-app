import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alex', age: 25 },
      { name: 'José', age: 26 },
      { name: 'Arantxa', age: 23 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = newName => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Alejandro';
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'José', age: 26 },
        { name: 'Arantxa', age: 23 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 25 },
        { name: 'José', age: 26 },
        { name: 'Arantxa', age: 23 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Alejandro')}
        >
          Switch Name
        </button>
        {/* esta sintaxis puede ser ineficiente mejor usar bind() */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Alex')}
          change={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Painting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
