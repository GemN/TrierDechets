import gql from 'graphql-tag';

export const SIGN_UP_USER = gql`
  mutation SignUpUser($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const AUTH_USER = gql`
  mutation AuthUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;
