import React from 'react';
import withSpeed from './withSpeed';

@withSpeed(
  () => (10)
)
class Heli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diagonalBlade: false,
    };
  }

  componentDidMount() {
    setInterval(this.rotateBlade, 50);
  }

  rotateBlade = () => {
    this.setState({ diagonalBlade: !this.state.diagonalBlade });
  };

  render() {
    return (
      <div>
        <img
          src={`heli-${this.state.diagonalBlade ? 1 : 2}.png`}
          style={{ marginLeft: `${this.props.distance}px` }}
        />
      </div>
    );
  }
}

export default Heli;
