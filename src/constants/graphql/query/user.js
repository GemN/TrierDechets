import gql from 'graphql-tag';

export const CONNECTED_USER = gql`
  query {
    user {
      id
      email
    }
  }
`;

export const USER_TRASHS = gql`
  query {
    user {
      id
      favTrashs
    }
  }
`;
