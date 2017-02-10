import React from 'react';
import withSpeed from './withSpeed';

class Car extends React.Component {
  render() {
    return (
      <div>
        <img src="car.png" style={{ marginLeft: `${this.props.distance}px` }} />
      </div>
    );
  }
}

export default withSpeed(Car);
