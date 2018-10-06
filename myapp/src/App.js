import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const UsersData = [
  { name: 'John', isActive: false },
  { name: 'Bob', isActive: false },
  { name: 'Frank', isActive: true },
  { name: 'Brad', isActive: false },
  { name: 'Mary', isActive: true },
  { name: 'Christine', isActive: true },
  { name: 'Jane', isActive: true },
];

// class Sami extends Component {
//   render() {
//     return (
//       <div class="container">
//       <p>{this.props.msg}</p>
//       <span>{this.props.children}</span>
//       </div>
//     );
//   }
// }

// Sami.propTypes = {
//   msg: PropTypes.string.isRequired
//   // boolean, PropTypes.bool
//   // function, PropTypes.func
// };

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

// const Message = (props) => <div>{props.content}</div>;

// class Profile extends Component {
//   static propTypes = {
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired
//   };

//   render() {
//     return (
//       <div>
//         <img src={this.props.img} style={{
//           width: 200,
//           height: 200,
//           border: '3px solid purple'
//         }}/>
//         <h2>Name: {this.props.name}</h2>
//         <h3>Username: {this.props.username}</h3>
//       </div>
//     );
//   }
// }

// Profile.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired
// };

class Users extends Component {
  render() {
    const activeUsers = this.props.list.filter(function(user) {
      return user.isActive === true;
    });
    const inactiveUsers = this.props.list.filter(user => user.isActive === false);
    console.log('Active Users', activeUsers);
    console.log('Inactive Users', inactiveUsers);
    return (
      <div>
        <h2>Active Users</h2>
        <ul>
          {/* <li>John</li> */}
          {activeUsers.map(user => {
            return <li key={user.name}>{user.name}</li>;
          })}
        </ul>
        <h2>Inactive Users</h2>
        <ul>
          {inactiveUsers.map(user => {
            return <li key={user.name}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired
    })
  )
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Sami msg="Hi" />
          <Sami msg="React is awesome!" />
          <Sami msg="My name is Sami" />
          <Sami msg="No message!">I am the children message</Sami>
          <Message content="Hello world!" /> */}
          {/* <Profile 
            img="https://avatars1.githubusercontent.com/u/293053?v=4"
            name="Mohammed Shahbaaz Hussain"
            username="shahbaaz"
          /> */}
          <Users list={UsersData} />
        </header>
      </div>
    );
  }
}

export default App;
