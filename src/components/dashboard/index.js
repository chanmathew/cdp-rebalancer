import React from "react";
import Card from "../card";
import "./styles.scss";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h3>Your CDP's</h3>
        <div className="cardContainer">
          <Card />
        </div>
      </div>
    );
  }
}

export default Dashboard;
