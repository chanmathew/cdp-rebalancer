import React, { Component } from 'react'
import Dashboard from './components/dashboard'
import Header from './components/header'
import Sidebar from './components/sidebar'
import './App.scss'

class App extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Dashboard />
        <Sidebar />
      </div>
    )
  }
}

export default App
