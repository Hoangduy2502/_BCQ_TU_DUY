import { GraphQLClient, gql } from 'graphql-request'
import GrapQlClient from './GrapQlClient'
export default async ()=> {

    const query = gql`
    {
       
        getBlogs(limit:4){
            id
            title
            content
            created_at
            description
            image_link
        }
    }
  `
    const data = await GrapQlClient.request(query)
    return data
}
