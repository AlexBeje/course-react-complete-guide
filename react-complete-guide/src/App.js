import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Alex", age: 27 },
      { name: "Bia", age: 21 },
      { name: "Dario", age: 0 },
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Alex", age: 27 },
        { name: event.target.value, age: 21 },
        { name: "Dario", age: 5 },
      ],
    });
  };

  showPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
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
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            >
              Hobbies: Riding.
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Beje")}
              change={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
