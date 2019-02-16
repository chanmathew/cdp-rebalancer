import React from "react";
import "./styles.scss";

class Card extends React.Component {
  render() {
    return (
      <div className="card block" id="card1">
        <div className="flex space-between">
          <h3 className="half">CDP #1</h3>
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
              <p>80%</p>
            </div>
            <div className="preview-progress">
              <p>40%</p>
            </div>
          </div>
        </div>
        <div className="flex space-between">
          <div className="one-fourth">
            <h6>Collateral</h6>
            <p>1.3 ETH</p>
          </div>
          <div className="one-fourth">
            <h6>Loan</h6>
            <p>135.34 DAI</p>
          </div>
          <div className="one-fourth">
            <h6>Liquidation Price</h6>
            <p>$64.34 / ETH</p>
          </div>
          <div className="one-fourth">
            <h6>Collateral Ratio</h6>
            <p>254.3%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
