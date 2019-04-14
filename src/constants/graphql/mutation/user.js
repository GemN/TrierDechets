import gql from 'graphql-tag';

export const SIGN_UP_USER = gql`
  mutation SignUpUser($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
    }
  }
`;
