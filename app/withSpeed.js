import React from 'react';

function withSpeed(WrappedComponent) {
  return class WithSpeed extends WrappedComponent {
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
      const newDistance = this.state.distance + 10;
      this.setState({ distance: newDistance });
      if (newDistance > 400) {
        clearInterval(this.interval);
      }
    };

    render() {
      return (
        <WrappedComponent distance={this.state.distance} />
      )
    }
  }
}

export default withSpeed;
