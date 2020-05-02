import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        Hello. <span>🌞</span> It's{this.state.date.toLocaleTimeString()}
        o'clock.
        {this.tick()}
      </div>
    );
  }
}
export default Clock;
