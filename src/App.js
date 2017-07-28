import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentsPage from './containers/studentsPage'

class App extends Component {
  render() {
    return (
      <div>
        <StudentsPage />
      </div>
    );
  }
}

export default App;
