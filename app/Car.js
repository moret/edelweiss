import React from 'react';
import withSpeed from './withSpeed';

const models = {
  ferrari: {
    sprite: 'car-red.png',
    speed: 6,
  },
  rioCab: {
    sprite: 'car-yellow.png',
    speed: 8,
  },
};

@withSpeed(
  ownProps => (models[ownProps.model].speed)
)
class Car extends React.Component {
  render() {
    return (
      <div>
        <img
          src={models[this.props.model].sprite}
          style={{ marginLeft: `${this.props.distance}px` }}
        />
      </div>
    );
  }
}

export default Car;
