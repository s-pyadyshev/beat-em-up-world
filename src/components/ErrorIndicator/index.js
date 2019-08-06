import React, { Component } from 'react';
import icon from './error.png'

class ErrorIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="error-indicator">
        <img src={icon} alt="error-icon"/>
        <span className="boom">WRECK!</span>
        <span>
          Something bad happened!
        </span>
      </div>
    );
  }
}

export default ErrorIndicator;