import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, opts) {
  const authLink = setContext((_, { headers }) => {
    const token = opts ? opts.getToken() : '';
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const httpLink = createHttpLink({
    uri:
      process.env.SERV_API_LINK
      || 'https://api.graph.cool/simple/v1/cjugt1nc605zf01048jg0dh6m',
    credentials: 'same-origin',
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState, options) {
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
