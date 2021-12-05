import { GraphQLClient, gql } from 'graphql-request'
import GrapQlClient from './GrapQlClient'
export default async (id) => {

    const query = gql`
    {
        getBlog(page:1 per_page:1000000 where:{id:${id}})
            {
                content{
                id
                content
                title
                created_at
                description
                blog_types
                {
                    id
                    name
                }
                thumbnail
                {
                    formats
                }
                small_title
                }
                paging
                {
                per_page
                total_page
                total_item
                current_page
                }
            }
    }
  `
    const data = await GrapQlClient.request(query)

   for(var i in data.getBlog.content)
    {  
        if (data.getBlog.content[i].content!= null)
        {
            data.getBlog.content[i].content = data.getBlog.content[i].content.replaceAll('src="', 'src="' + process.env.REACT_APP_API_IMG)
            
        }
           
           

    }
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
