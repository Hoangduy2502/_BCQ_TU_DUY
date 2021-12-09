import { GraphQLClient, gql } from 'graphql-request'
import GrapQlClient from './GrapQlClient'
export default async (id,page,per_page) => {

    const query = gql`
    {
       
        getBlog(page:${page} per_page:${per_page} sort:{created_at:ASC} where:{blog_types:{id:${id}}})
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
            data.getBlog.content[i].content = data.getBlog.content[i].content.replaceAll('div data-oembed-url', 'iframe width="100%" src')
            // data.getBlog.content[i].content = data.getBlog.content[i].content.replaceAll('oembed ', 'iframe')
            // data.getBlog.content[i].content = data.getBlog.content[i].content.replaceAll('url ', 'src')
            
        }
           
           

    }
   
   
    return data
}
