import React from "react";
import "./styles.scss";

let currentPercentage = 500;
let previewPercentage = 300;
let collateral = 1.3;
let loan = 135.34;
let liquidationPrice = 64.34;
let collateralRatio = 254;

function styleWidth(x) {
  let test = {
    width: (x / 1000) * 100 + "%"
  };

  return test;
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { previewProgress: false };

    this.togglePreview = this.togglePreview.bind(this);
  }

  togglePreview() {
    this.setState(state => ({
      previewProgress: !state.previewProgress
    }));
  }

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
            <div
              className={
                this.state.previewProgress
                  ? "progress progress-dim"
                  : "progress"
              }
              style={styleWidth(currentPercentage)}
            >
              <p className="text-align-right">{currentPercentage}%</p>
            </div>
            <div
              className={
                this.state.previewProgress
                  ? "preview-progress"
                  : "preview-progress display-none"
              }
              style={styleWidth(previewPercentage)}
            >
              <p className="text-align-right">{previewPercentage}%</p>
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
