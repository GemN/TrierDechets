import React from 'react';
import cookie from 'cookie';
import { LinkLogOut } from './style';

class Logout extends React.PureComponent {
  static async getInitialProps(context, apolloClient) {
    //    const { loggedInUser } = await checkLoggedIn(context.apolloClient);

    //    if (!loggedInUser.user) {
    // If not signed in, send them somewhere more useful
    //    redirect(context, '/signin');
    //  }
    return { client: apolloClient };
  }

  onClickLogout = () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1, //
    });

    //    apolloClient.cache.reset().then(() => {
    window.location.href = '/';
    //}); */
  };

  render() {
    return (
      <LinkLogOut onClick={() => this.onClickLogout()}>Log Out</LinkLogOut>
    );
  }
}

export default Logout;
