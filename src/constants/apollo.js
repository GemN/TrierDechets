import ApolloClient from 'apollo-boost';

const isBrowser = typeof window !== 'undefined';
const client = isBrowser
  ? new ApolloClient({
      uri:
        process.env.SERV_API_LINK ||
        'https://api.graph.cool/simple/v1/cjugt1nc605zf01048jg0dh6m',
    })
  : {};

export default client;
