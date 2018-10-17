import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class People extends Component {
  state = { data: 'My State data', persons: null };

  componentWillMount() {
    console.log('Component will mount');
  }

  componentDidMount() {
    // This is good for AJAX calls
    console.log('Component did mount');
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('Persons data', response.data);
        this.setState({persons: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentWillReceiveProps(newProps) {
    console.log('Component will receive props', newProps);
  }

  componentWillUpdate() {
    console.log('Component will update');
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  shouldComponentUpdate() {
    // If return true, component will render
    // If return false, component will not render
    console.log('Should component update');
    return true;
  }

  handleChange = event => {
    // console.log(event);
    this.setState({data: event.target.value});
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('Component render');
    const {persons} = this.state;
    return (
      <div>
        <h1>People Info</h1>
        {persons ? persons.map(person => (
          <div key={person.id} style={{paddingBottom: 10}}>
            <p>Name: {person.name}</p>
            <p>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
            <p>Website: <a href={`http://${person.website}`}>{person.website}</a></p>
          </div>
        )) : 'Loading...'}
      </div>
    );
  }
}

export default People;