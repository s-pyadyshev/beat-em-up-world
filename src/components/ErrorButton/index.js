import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ErrorButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderError: false
    }
  }

  render() {

    console.log('render');
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <Button variant="contained" color="secondary"
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </Button>
    );
  }
}

export default ErrorButton;