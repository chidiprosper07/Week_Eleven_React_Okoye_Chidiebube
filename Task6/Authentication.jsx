import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    isAuthenticated = Navigate('/dashboard')
    ;

    render() {
      if (this.isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        // Redirect the user to a login page or a specific route
        return <Redirect to="/login" />;
      }
    }
  };
};

export default withAuth;