import * as React from "react";

export interface ErrorBoundaryProps {}

const ErrorBoundary: React.SFC<ErrorBoundaryProps> = ({ children }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    return <div>Error</div>;
  }
};

export default ErrorBoundary;
