import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import CreateForm from './../create-form'
import RebalanceForm from './../rebalance-form'
import 'react-tabs/style/react-tabs.css'
import './styles.scss'

class Sidebar extends React.Component {
  state = {
    tabIndex: 0
  }

  render() {
    return (
      <div className='sidebar'>
        <Tabs
          className='tabs-container'
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className='tab-list' selectedClassName='active'>
            <Tab className='tab-item' selectedClassName='active'>
              Create CDPs
            </Tab>
            <Tab className='tab-item' selectedClassName='active'>
              Rebalance CDPs
            </Tab>
          </TabList>

          <TabPanel>
            <CreateForm />
          </TabPanel>
          <TabPanel>
            <RebalanceForm />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default Sidebar
