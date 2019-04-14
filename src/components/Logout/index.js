import React from 'react';
import cookie from 'cookie';
import { LinkLogOut } from './style';

class Logout extends React.PureComponent {
  static async getInitialProps(context) {
    return { client: context.apolloClient };
  }

  onClickLogout = () => {
    //    const { client } = this.props;
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1, //
    });

    // client.cache.reset().then(() => {
    window.location.href = '/';
    // });
  };

  props: {
    client: {},
  };

  render() {
    return (
      <LinkLogOut onClick={() => this.onClickLogout()}>Log Out</LinkLogOut>
    );
  }
}

export default Logout;
