import React, { Component } from 'react'

//import DeleteButton from './DeleteButton.js';
//import CreateCdp from './components/CreateCdp.js';
//import WithdrawDai from './components/WithdrawDai.js';
//import DepositDai from './components/DepositDai.js';
//import Rebalance from './components/Rebalance.js';

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

        {/*<CreateCdp />
        //<WithdrawDai />
        //<DepositDai />
        //<Rebalance />*/}
      </div>
    )
  }
}

export default App
