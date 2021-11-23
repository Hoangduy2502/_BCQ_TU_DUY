import { GraphQLClient, gql } from 'graphql-request'
import GrapQlClient from './GrapQlClient'
export default async (id)=> {

    const query = gql`
    {
        getBlogs(where:{id:${id}}){
            id
            title
            content
            created_at
            description
            small_title
            image_link
        }
    }
  `
    const data = await GrapQlClient.request(query)
    return data
}
