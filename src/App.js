import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StudentsPage from './containers/studentsPage'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <StudentsPage />
      </MuiThemeProvider>
    );
  }
}

export default App;
