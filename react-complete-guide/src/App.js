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
  };

  switchNameHandler = () => {
    console.log("Button clicked");
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, this is your first react app!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Hobbies: Riding.
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
