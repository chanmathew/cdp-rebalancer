import React from 'react'
import './styles.scss'

let minCollateralRatio = 1.5
let EthPrice = 300

const initialState = {
  collateralAmount: 0,
  loanAmount: 0,
  loanToValueRatio: 0,
  liquidationPrice: 0
}
export default class CreateForm extends React.Component {
  state = { ...initialState }
  calculations = state => {
    const { loanAmount, collateralAmount } = state
    let liquidationPrice =
      (minCollateralRatio * loanAmount) / (EthPrice * collateralAmount)
    let loanToValueRatio = loanAmount / (EthPrice * collateralAmount)
    this.setState({
      liquidationPrice,
      loanToValueRatio
    })
  }
  handleInput = e => {
    console.log(e.target.name)
    // If user's entering a number in collateral or loan input fields > 0
    if (e.target.name && e.target.value > 0) {
      this.setState({
        [e.target.name]: e.target.value
      })
      this.calculations(this.state)
    } else {
      // Clear input if no values entered
      this.setState({ ...initialState })
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('Clicked!')
  }
  render() {
    return (
      <form className='rebalance-form'>
        <h3>Create your CDPs</h3>
        <label htmlFor='cdp-first'>Amount to collateralize:</label>
        <input
          type='number'
          placeholder='0'
          name='collateralAmount'
          onChange={this.handleInput}
        />
        <label htmlFor='cdp-second'>Amount to loan:</label>
        <input
          type='number'
          placeholder='0'
          name='loanAmount'
          onChange={this.handleInput}
        />
        <div className='flex space-between form-summary'>
          <span>ETH Liquidiation Price:</span>
          <span>${this.state.liquidationPrice}</span>
        </div>
        <div className='flex space-between form-summary'>
          <span>Loan to value ratio:</span>
          <span>{this.state.loanToValueRatio}%</span>
        </div>
        <button onClick={this.handleSubmit}>Create CDP</button>
      </form>
    )
  }
}
