import React, { Component } from 'react';
import './App.css';

class Sami extends Component {
  render() {
    return (
      <div class="container">
      <p>{this.props.msg}</p>
      <span>{this.props.children}</span>
      </div>
    );
  }
}

// function Message(props) {
//   return (
//     <span>{props.content}</span>
//   );
// }

// const Message = (props) => {
//   return (
//     <div>{props.content}</div>
//   );
// }

const Message = (props) => <div>{props.content}</div>;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sami msg="Welcome to React learning" />
          <Sami msg="React is awesome!" />
          <Sami msg="My name is Sami" />
          <Sami msg="No message!">I am the children message</Sami>
          <Message content="Hello world!" />
        </header>
      </div>
    );
  }
}

export default App;
