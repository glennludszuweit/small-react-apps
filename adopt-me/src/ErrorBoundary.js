import React from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an ERROR!', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There is an error. <Link to='/'>Click here</Link> to go to homepage or
          wait 5 seconds
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
