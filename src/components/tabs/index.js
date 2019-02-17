import React from 'react'
import './styles.scss'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'create'
    }
  }
  className = 'tab'
  handleTabSelect = e => {
    console.log(e.currentTarget.dataset.id, this.state.activeTab)
    this.setState({
      activeTab: e.currentTarget.dataset.id
    })
    if (e.currentTarget.dataset.id === this.state.activeTab) {
      this.className += ' active'
    } else {
      this.className = 'tab'
    }
  }
  render() {
    return (
      <div className='tabs-container'>
        <div
          className={this.className}
          data-id='create'
          onClick={this.handleTabSelect}
        >
          Manage CDPs
        </div>
        <div
          className={this.className}
          data-id='rebalance'
          onClick={this.handleTabSelect}
        >
          Rebalance CDPs
        </div>
      </div>
    )
  }
}

export default Tabs
