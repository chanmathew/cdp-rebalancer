import React from "react";
import Card from "../card";
import "./styles.scss";

var cups1 = {
  id: [1,356],
  [1]: {
    eth: 65,
    dai: 0
  },
  [356]: {
    eth: 129,
    dai: 10
  }
}
var cups = {
  id: [1,5,10,1000],
  [1]: {
    eth: 65,
    dai: 0
  },
  [5]: {
    eth: 129,
    dai: 10
  },
  [10]: {
    eth: 1,
    dai: 100
  },
  [1000]: {
    eth: 100,
    dai: 20000
  }
}

class Dashboard extends React.Component {
  createCards = () =>{
    let cards = [];
    for (let i = 0; i < cups.id.length; i++) {
      cards.push(<Card internalID={i+1} id={cups.id[i]} cup={cups[cups.id[i]]}/>)
    }
    return cards
  }
  render() {
    return (
      <div className="dashboard">
        <h3>Your CDP's</h3>
        <div className="cardContainer">
          {this.createCards()}
        </div>
      </div>
    );
  }
}

export default Dashboard;
