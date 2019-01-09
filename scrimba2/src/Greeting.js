import React from "react";

class Greeting extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Johnson"
    };
  }
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon";
    } else {
      timeOfDay = "Evening";
    }
    return (
      <div>
        <h1>Good {timeOfDay} to you, {this.state.name}</h1>
        <hr></hr>
      </div>
    );
  }
}

export default Greeting;
