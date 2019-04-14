import { USER_TRASHS } from '../constants/graphql/query/user';

export default apolloClient =>
  apolloClient
    .query({
      query: USER_TRASHS,
    })
    .then(data => ({ user: data.data.user }))
    .catch(() => ({ user: {} }));
