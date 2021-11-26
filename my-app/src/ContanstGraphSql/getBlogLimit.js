import { GraphQLClient, gql } from 'graphql-request'
import GrapQlClient from './GrapQlClient'
export default async (limit) => {

    const query = gql`
        {

            getBlogs(limit:${limit}){
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
    if(data.getBlogs[0].content!=null)
    data.getBlogs[0].content = data.getBlogs[0].content.replaceAll('src="','src="'+process.env.REACT_APP_API_IMG)
    return data


    // let result;
    // const data = await fetch(process.env.REACT_APP_API_GRAPSQL, {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify({ query }),
    // }).then(res => res.json())
    //     .then(res => result = res.data)
    //     console.log("TEST",result)
    // return result

}
