import { GraphQLClient, gql } from 'graphql-request'
const graphQLClient = new GraphQLClient(process.env.REACT_APP_API_GRAPSQL)
export default  graphQLClient
