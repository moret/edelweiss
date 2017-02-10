import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.move, 100);
  }

  move = () => {
    const newDistance = this.state.distance + 8;
    this.setState({ distance: newDistance });
    if (newDistance > 400) {
      clearInterval(this.interval);
    }
  };

  render() {
    return (
      <div>
        <img src="car.png" style={{ marginLeft: `${this.state.distance}px` }} />
      </div>
    );
  }
}

export default Car;
