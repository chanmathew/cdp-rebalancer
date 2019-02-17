import React from 'react'
import './styles.scss'

let minCollateralRatio = 1.5
let EthPrice = 300

const initialState = {
  collateralAmount: 0,
  loanAmount: 0,
  loanToValueRatio: 0,
  liquidationPrice: 0,
  cdpCreated: false
}
export default class CreateForm extends React.Component {
  state = { ...initialState }
  calculations = state => {
    const { loanAmount, collateralAmount } = state
    let liquidationPrice = (minCollateralRatio * loanAmount) / collateralAmount
    let loanToValueRatio = ((EthPrice * collateralAmount) / loanAmount) * 100
    this.setState({
      liquidationPrice,
      loanToValueRatio
    })
  }
  handleInput = e => {
    // If user's entering a number in collateral and loan input fields > 0
    if (e.target.name && e.target.value > 0) {
      this.setState(
        {
          [e.target.name]: e.target.value
        },
        () => {
          this.calculations(this.state)
        }
      )
    } else {
      // Clear input if no values entered
      this.setState(
        {
          [e.target.name]: 0
        },
        () => {
          this.calculations(this.state)
        }
      )
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('Clicked!')
    this.setState({
      cdpCreated: true
    })
  }
  render() {
    if (!this.state.cdpCreated) {
      return (
        <form className='rebalance-form'>
          <h3>Manage CDPs</h3>
          <label htmlFor='cdp-first'>Amount of ETH to collateralize:</label>
          <input
            type='number'
            placeholder='0'
            name='collateralAmount'
            onChange={this.handleInput}
          />

          <button onClick={this.handleSubmit}>Create CDP</button>
        </form>
      )
    } else {
      return (
        <form className='rebalance-form'>
          <label htmlFor='cdp-second'>Amount of DAI to borrow:</label>
          <input
            type='number'
            placeholder='0'
            name='loanAmount'
            onChange={this.handleInput}
          />
          <div className='flex space-between form-summary'>
            <span>ETH Liquidiation Price:</span>
            <span>${this.state.liquidationPrice.toFixed(2)}</span>
          </div>
          <div className='flex space-between form-summary'>
            <span>Loan to value ratio:</span>
            <span>
              {this.state.loanToValueRatio > 0
                ? this.state.loanToValueRatio.toFixed(2)
                : 0}
              %
            </span>
          </div>
          <button onClick={this.handleSubmit}>Borrow DAI</button>
        </form>
      )
    }
  }
}
