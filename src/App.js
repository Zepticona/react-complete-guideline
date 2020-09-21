import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'asd', name: 'Max', age: 28},
      {id: 'asda', name: 'Manu', age: 29},
      {id: 'asd2', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (er, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id  === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = er.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }


  render() {
    const style={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(er) => this.nameChangedHandler(er, person.id)}></Person>
            })
          }
        </div>
      )
      style.backgroundColor = "red";
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold'); 
    }
    return (
      <div className="App">
        <h1>I'm a react app.</h1>
        <p className={classes.join(' ')}>This is really working.</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          persons
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\m a  react app.'));
  }
}

export default App;
