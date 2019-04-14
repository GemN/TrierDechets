import App, { Container } from 'next/app';
import ApolloProvider from 'react-apollo/ApolloProvider';
import { appWithTranslation } from '../i18n';
import withApolloClient from '../src/lib/withApolloClient';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(appWithTranslation(MyApp));
