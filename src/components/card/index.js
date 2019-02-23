import React from "react";
import PubSub from 'pubsub-js'
import "./styles.scss";

let currentPercentage = 1000;
let previewPercentage = 300;
let price = 300;
let collateral = 1.3;
let loan = 135.34;
let liquidationPrice = 64.34;
let collateralRatio = 254;
let minCollateralPercentage = 150;
let minCollateralRatio = 1.5;

//this.props.id.cups.eth
//this.props.cups.id.dai

function styleWidth(x) {
  let test = {
    width: (x / 1000) * 100 + "%"
  };

  return test;
}

/*var previewSubscriber = function(msg,data) {
  this.setState(state => ({
    previewProgress: data
  }));
  enablePreview = data;
  console.log(enablePreview)
}*/
//PubSub.subscribe('preview',previewSubscriber)

class Card extends React.Component {
  constructor(props) {
    super(props);
  };
  state = {
    previewProgress: false,
    collateralPreview: 0
  }
  subscriptions = [
  PubSub.subscribe('previewEnable', (msg,data) => {
    console.log(data)
    if (this.state.previewProgress != data[2]) {
      if (this.props.internalID == data[0] || this.props.internalID == data[1]) {
        console.log(`Toggling from Preview: ${this.state.previewProgress}`);
        this.setState(state => ({previewProgress: data[2]}))
      }
    }
  }),
  PubSub.subscribe('collateralAdd', (msg,data) => {
    console.log(data)
    if (this.props.internalID == data[0]) {
      console.log(`Adding: ${data[1]} ETH`);
      this.setState(state => ({collateralPreview: (data[1])}))
    }
  })
  ];
  componentWillUnmount = () => this.subscriptions.forEach(PubSub.unsubscribe);

  render() {
    return (
      <div className="card block" id="card1">
        <div className="flex space-between">
          <h3 className="half">CDP #{this.props.internalID}</h3>
          <h5 className="half text-align-right">CDP ID: {this.props.id}</h5>
        </div>
        <div className="progress-container">
          <div className="progress-labels flex">
            {/*<p className="one-fourth">0%</p>*/}
            <p className="one-fourth">{minCollateralPercentage.toString()}%</p>
            <p className="one-fourth"></p>
            <p className="half text-align-right">1000%</p>
          </div>
          <div className="progress-bar">
            <div
              className={
              this.state.previewProgress
                  ? "progress progress-dim"
                  : "progress"
              }
              style={styleWidth(Math.min((price*this.props.cup.eth/this.props.cup.dai)*100,1000))}
            >
              {/*<p className="text-align-right">{price*this.props.cup.eth/this.props.cup.dai*100}%</p>*/}
            </div>
            <div
              className={
                this.state.previewProgress
                  ? "preview-progress"
                  : "preview-progress display-none"
              }
              style={styleWidth(Math.min(((this.state.collateralPreview+this.props.cup.eth)*price/this.props.cup.dai*100),1000))}
            >
              <p className="text-align-right">{((this.state.collateralPreview+this.props.cup.eth)*price/this.props.cup.dai*100).toFixed(0)}%</p>
            </div>
          </div>
        </div>
        <div className="flex space-between">
          <div className="one-fourth">
            <h6>Collateral</h6>
            <p>{this.props.cup.eth} ETH</p>
          </div>
          <div className="one-fourth">
            <h6>Loan</h6>
            <p>{this.props.cup.dai} DAI</p>
          </div>
          <div className="one-fourth">
            <h6>Liquidation Price</h6>
            <p>${((minCollateralRatio*this.props.cup.dai)/this.props.cup.eth).toFixed(2)} / ETH</p>
          </div>
          <div className="one-fourth">
            <h6>Collateral Ratio</h6>
            <p>{(price*this.props.cup.eth/this.props.cup.dai)*100}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
