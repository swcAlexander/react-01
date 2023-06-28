import React from 'react';

export default class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  intervalId = null;
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  //   чистимо таймаут (обов'язково!!!)
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return <div>{this.state.time}</div>;
  }
}
