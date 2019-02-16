import React, { Component } from 'react';
import Dashboard from './components/dashboard';
import Header from './components/header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
