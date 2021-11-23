import { GraphQLClient, gql } from 'graphql-request'
export default async (id)=> {
    const endpoint = 'http://35.226.200.184:1337/graphql'
    const graphQLClient = new GraphQLClient(endpoint)
    const query = gql`
    {
        getBlogs(where:{id:${id}}){
            id
            title
            content
            created_at
            description
            image_link
        }
    }
  `
    const data = await graphQLClient.request(query)
    return data
}
