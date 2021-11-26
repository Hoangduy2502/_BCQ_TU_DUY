import { GraphQLClient, gql } from 'graphql-request'
import GrapQlClient from './GrapQlClient'
export default async (id) => {

    const query = gql`
    {
        getBlogs(where:{id:${id}}){
            id
            title
            content
            created_at
            description
            small_title
            thumbnail{
            formats
            
            }
           
        }
    }
  `
    const data = await GrapQlClient.request(query)
    data.getBlogs[0].content = data.getBlogs[0].content.replaceAll('src="','src="'+process.env.REACT_APP_API_IMG)
    console.log("TEST", data)
    // data.getBlogs[0].content.replaceAll('src="','src="https://up-dev.banhcuonquyen.vn')
    // data.getBlogs.map(ele=>ele.content)
    // const result=data.getBlogs[]
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
