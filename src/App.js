import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm />
      </div>
    )
  }
}

export default App;
