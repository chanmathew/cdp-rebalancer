import React from "react";
import "./styles.scss";

let currentPercentage = 80;
let previewPercentage = 40;
let collateral = 1.3;
let loan = 135.34;
let liquidationPrice = 64.34;
let collateralRatio = 254;

class Card extends React.Component {
  state = { showPreview: false };

  togglePreview = () => {
    this.setState({
      showPreview: !this.state.showPreview
    });
  };

  render() {
    return (
      <div className="card block" id="card1">
        <div className="flex space-between">
          <h3 className="half">CDP #1</h3>
          <button onClick={this.togglePreview}>Test Preview</button>
          <h5 className="half text-align-right">wallet address</h5>
        </div>
        <div className="progress-container">
          <div className="progress-labels flex">
            <p className="one-fourth">0%</p>
            <p className="one-fourth">150%</p>
            <p className="half text-align-right">1000%</p>
          </div>
          <div className="progress-bar">
            <div className="progress">
              <p>{currentPercentage}%</p>
            </div>
            <div className="preview-progress display-none">
              <p>{previewPercentage}%</p>
            </div>
          </div>
        </div>
        <div className="flex space-between">
          <div className="one-fourth">
            <h6>Collateral</h6>
            <p>{collateral} ETH</p>
          </div>
          <div className="one-fourth">
            <h6>Loan</h6>
            <p>{loan} DAI</p>
          </div>
          <div className="one-fourth">
            <h6>Liquidation Price</h6>
            <p>${liquidationPrice} / ETH</p>
          </div>
          <div className="one-fourth">
            <h6>Collateral Ratio</h6>
            <p>{collateralRatio}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
