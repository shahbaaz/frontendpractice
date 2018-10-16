// import React, { Component } from 'react';
// import './App.css';

// class MyForm extends Component {
//   state = {error: this.props.getErrorMessage('')};

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log(event.target[0].value);
//     // console.log('NAME', event.target.elements.name.value);
//     // console.log('EMAIL', event.target.elements.email.value);

//     console.log('NAME NODE', this.nameNode.value);
//     console.log('EMAIL NODE', this.emailNode.value);
//     const value = this.nameNode.value;
//     const error = this.props.getErrorMessage(value);
//     if (error) {
//       console.log(`ERROR: ${error}`);  
//     } else {
//       console.log(`SUCCESS: ${value}`);
//     }
//   }

//   handleChange = event => {
//     // console.log(event);
//     const value = event.target.value;
//     this.setState({
//       error: this.props.getErrorMessage(value)
//     });
//   }

//   render() {
//     //console.log('STATE', this.state.error);
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" onChange={this.handleChange}
//           ref={node => this.nameNode = node} />
//         </label>
//         {this.state.error ? <div style={{color: 'red'}}>{this.state.error}</div> : null}
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" 
//           ref={node => this.emailNode = node} />
//         </label>
//         <br />
//         <button disabled={Boolean(this.state.error)} type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//          <header className="App-header">
//           <MyForm getErrorMessage={value => {
//             if (value.length < 4) {
//               return 'Value must be atleast 4 chars'
//             }
//             return null;
//           }} />
//          </header>
//       </div>
//     );
//   }
// }

// export default App;