import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h2>This is sample component to work on!</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

MyComponent.propTypes = {
  text: PropTypes.string,
};

MyComponent.defaultProps = {
  text: 'DEFAULT_TEXT',
};

export default MyComponent;
