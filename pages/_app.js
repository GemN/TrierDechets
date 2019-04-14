import App, { Container } from 'next/app';
import ApolloProvider from 'react-apollo/ApolloProvider';
import { appWithTranslation } from '../i18n';
import client from '../src/constants/apollo';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default appWithTranslation(MyApp);
