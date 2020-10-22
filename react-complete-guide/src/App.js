import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Alex", age: 27 },
      { name: "Bia", age: 21 },
      { name: "Dario", age: 0 },
    ],
  });
  const [otherState, setOtherState] = useState("some other value");

  console.log("😏", personState, otherState);

  const switchNameHandler = () => {
    // console.log("Button clicked");
    // DON't DO THIS: this.state.persons[0].name = "Alexandru";
    setPersonState({
      persons: [
        { name: "Alexandru", age: 27 },
        { name: "Bia", age: 21 },
        { name: "Dario", age: 5 },
      ],
      // otherState: personState.otherState,
    });
    setOtherState("my new state");
  };

  return (
    <div className="App">
      <h1>Hi, this is your first react app!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      >
        Hobbies: Riding.
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default app;
