import { GraphQLClient, gql } from 'graphql-request'
import GrapQlClient from './GrapQlClient'
export default async () => {

    const query = gql`
    {
       
        getBlogs{
            id
            title
            content
            created_at
            description
            thumbnail{
            formats
            
            }
        }
    }
  `
 

    const data = await GrapQlClient.request(query)
    data.getBlogs[0].content = data.getBlogs[0].content.replaceAll('src="','src="'+process.env.REACT_APP_API_IMG)
   
   
    return data
}
