import React from "react";

class ErrorBoundary extends React.Component {
  componentDidCatch(error: any, info: any) {
    console.log(error);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
