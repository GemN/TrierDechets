import gql from 'graphql-tag';

export const CONNECTED_USER = gql`
  query {
    user {
      id
      email
    }
  }
`;
