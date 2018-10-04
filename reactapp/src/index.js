var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to my Class!</h1>
        <div>Let's learn some React!</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
