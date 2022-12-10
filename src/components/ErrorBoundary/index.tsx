import React from "react";

class ErrorBoundary extends React.Component<any> {
  componentDidCatch(error: any) {
    return error;
  }

  render({ children } = this.props) {
    return children;
  }
}

export default ErrorBoundary;
