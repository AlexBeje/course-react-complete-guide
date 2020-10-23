import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "dafe1", name: "Alex", age: 27 },
      { id: "dafe2", name: "Bia", age: 21 },
      { id: "dafe3", name: "Dario", age: 0 },
    ],
    otherState: "my other state",
    showPersons: false,
  };

  switchNameHandler = (name) => {
    // console.log("Button clicked");
    // DON't DO THIS: this.state.persons[0].name = "Alexandru";
    this.setState({
      persons: [
        { name: name, age: 27 },
        { name: "Bia", age: 21 },
        { name: "Dario", age: 5 },
      ],
      otherState: "new other state",
    });
  };

  showPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  removePersonHandler = (personIndex) => {
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({
      persons: person,
    });
  };

  render() {
    const myStyle = {
      cursor: "pointer",
      borderRadius: "4px",
      border: "1px solid gray",
      padding: "1em",
      margin: "auto 0.5em",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.removePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              ></Person>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, this is your first react app!</h1>
        <button
          style={myStyle}
          onClick={() => this.switchNameHandler("Alexandru Bejenaru")}
        >
          Switch Name
        </button>
        <button style={myStyle} onClick={this.showPersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
