import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    users: [
      { userName: "Alex", userPassword: "*****" },
      { userName: "Bia", userPassword: "*****" },
      { userName: "Dario", userPassword: "*****" },
    ],
  };

  showUserPasswords = () => {
    this.setState({
      users: [
        { userName: "Alex", userPassword: "4i3x" },
        { userName: "Bia", userPassword: "314" },
        { userName: "Dario", userPassword: "d@r10" },
      ],
    });
  };

  userChangeHandler = (event) => {
    this.setState({
      users: [
        { userName: event.target.value, userPassword: "*****" },
        { userName: "Bia", userPassword: "*****" },
        { userName: "Dario", userPassword: "*****" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          userName={this.state.users[0].userName}
          change={this.userChangeHandler}
        />
        <UserOutput
          userName={this.state.users[0].userName}
          userPassword={this.state.users[0].userPassword}
        />
        <UserOutput
          userName={this.state.users[1].userName}
          userPassword={this.state.users[1].userPassword}
        />
        <UserOutput
          userName={this.state.users[2].userName}
          userPassword={this.state.users[2].userPassword}
        />
        <button onClick={this.showUserPasswords}>Show Password</button>
      </div>
    );
  }
}

export default App;
