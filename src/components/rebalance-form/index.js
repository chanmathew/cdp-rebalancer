import React from 'react'
import PubSub from 'pubsub-js'

export default class RebalanceForm extends React.Component
{
  state = {
    collateral: 5,
    rebalanceValue: 0
  }

  handleSlider = e => {
    this.setState({
      rebalanceValue: e.target.value},
      () => {
        if (this.state.rebalanceValue != 0) {
          //PubSub.publish('previewCDP1', 0);
          //PubSub.publish('previewCDP2', 1);
          PubSub.publishSync('previewEnable', [1,2,true]);
          PubSub.publishSync('collateralAdd', [1,this.state.rebalanceValue/100*this.state.collateral]);
          //PubSub.publish('collateralMinus', e.target.value/100*this.props.collateral);
        } else {
          PubSub.publish('previewEnable',[1,2,false]);
        }

      }
    )
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('Clicked!')
  }

  render() {
    return (
      <form className='rebalance-form'>
        <h3>Rebalance your CDPs</h3>
        <label htmlFor='cdp-first'>From:</label>
        <select
          className='select'
          type='text'
          name='cdp-first'
          defaultValue='cdp1'
        >
          <option value='cdp1'>CDP 1</option>
          <option value='cdp2'>CDP 2</option>
        </select>
        <label htmlFor='cdp-second'>To:</label>
        <select
          className='select'
          type='text'
          name='cdp-second'
          defaultValue='cdp2'
        >
          <option value='cdp1'>CDP 1</option>
          <option value='cdp2'>CDP 2</option>
        </select>
        <div className='range-label'>
          <span>Amount:</span>
          <span>{this.state.rebalanceValue}% ({(this.state.rebalanceValue/100*this.state.collateral).toFixed(2)} ETH)</span>
        </div>
        <input
          name='rebalance'
          type='range'
          defaultValue={this.state.rebalanceValue}
          onChange={this.handleSlider}
        />
        <button onClick={this.handleSubmit}>Rebalance</button>
      </form>
    )
  }
}
