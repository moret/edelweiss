import React from 'react';

class Heli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      diagonalBlade: false,
    };
  }

  componentDidMount() {
    setInterval(this.rotateBlade, 50);
    this.interval = setInterval(this.move, 100);
  }

  rotateBlade = () => {
    this.setState({ diagonalBlade: !this.state.diagonalBlade });
  };

  move = () => {
    const newDistance = this.state.distance + 10;
    this.setState({ distance: newDistance });
    if (newDistance > 400) {
      clearInterval(this.interval);
    }
  };

  render() {
    return (
      <div>
        <img
          src={`heli-${this.state.diagonalBlade ? 1 : 2}.png`}
          style={{ marginLeft: `${this.state.distance}px` }}
        />
      </div>
    );
  }
}

export default Heli;
