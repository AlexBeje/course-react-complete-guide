import React, { Component } from "react";
import "./App.css";
import CharComponent from "./CharComponent/CharComponent";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  /**
   * [OK] Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
   * [OK] Create a new component (=>; ValidationComponent) which receives the text length as a prop.
   * [OK] Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
   * [OK] Create another component (=>; CharComponent) and style it as an inline box (=>; display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
   * [OK] Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
   * When you click a CharComponent, it should be removed from the entered text.
   */

  state = {
    input: "",
  };

  deleteCharHandler = (index) => {
    const char = this.state.input.split("");
    char.splice(index, 1);

    const joinedChars = char.join("");

    this.setState({
      input: joinedChars,
    });
  };

  changeHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  resetHandler = () => {
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.input}
        />
        <button onClick={this.resetHandler}>Reset</button>
        <ValidationComponent textLength={this.state.input.length} />
        <CharComponent
          delete={(index) => this.deleteCharHandler(index)}
          text={this.state.input}
        />
      </div>
    );
  }
}

export default App;
