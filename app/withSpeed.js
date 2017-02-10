import React from 'react';

function withSpeed(speedFunction) {
  return function enhanceWithSpeed(WrappedComponent) {
    return class WithSpeed extends WrappedComponent {
      static displayName = `WithSpeed(${getDisplayName(WrappedComponent)})`;

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
        const newDistance = this.state.distance + speedFunction(this.props);
        this.setState({ distance: newDistance });
        if (newDistance > 400) {
          clearInterval(this.interval);
        }
      };

      render() {
        return (
          <WrappedComponent
            distance={this.state.distance}
            {...this.props}
          />
        )
      }
    }
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withSpeed;
