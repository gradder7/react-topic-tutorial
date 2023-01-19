import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();
    console.log("in constructor");
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentDidMount() {
    console.log("component mount")
    setInterval(() => {
      const timeNow = new Date();
      const hours = timeNow.getHours();
      const minutes = timeNow.getMinutes();
      const seconds = timeNow.getSeconds();
      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);
  }

  render() {
    console.log("in render");
    return (
      <>
        <h1>Timer</h1>
        <span className="hours">{this.state.hours}:</span>
        <span className="minutes">{this.state.minutes}:</span>
        <span className="seconds">{this.state.seconds}</span>
      </>
    );
  }
}
