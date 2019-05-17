import ApolloClient, { InMemoryCache } from 'apollo-boost';

import apiConfig from 'config/api'

export default accessToken => new ApolloClient({
  uri: apiConfig.url,
  cache: new InMemoryCache(),
  ...accessToken && {
    request: operation => operation.setContext({
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }),
  },
})
