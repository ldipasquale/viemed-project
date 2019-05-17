import gql from 'graphql-tag'

const SIGN_IN = gql`
  mutation($userName: String!, $apiKey: String!) {
    generateAccessToken(userName: $userName, apiKey: $apiKey)
  }
`

export {
  SIGN_IN,
}
