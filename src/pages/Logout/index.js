import React from 'react';
import { withApollo } from 'react-apollo';

class Logout extends React.PureComponent {
  componentWillUnmount() {
    localStorage.removeItem('token');
    this.client.cache.reset();
  }

  props: {
    client: {},
  };

  render() {
    return <div>logging out...</div>;
  }
}

export default withApollo(Logout);
