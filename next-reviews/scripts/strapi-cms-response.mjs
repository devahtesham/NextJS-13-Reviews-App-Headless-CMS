// fetching cms API for getting reviews
import {writeFileSync} from "node:fs"
import qs from "qs"

const query = qs.stringify(
    {
        fields:["slug","title","publishedAt","subtitle"],
        // populate:"*"
        populate:{image:{
            fields:["url"]
        }},
        sort:["publishedAt:desc"],
        pagination:{
            pageSize:6
        }
    },
{encodeValuesOnly: true})

const url = `http://localhost:1337/api/reviews?${query}`;
// console.log('url:-', url)
const response = await fetch(url);
const {data} = await response.json();

let body = data.map(({attributes})=>{
    return{
        title:attributes.title,
        date:attributes.publishedAt.slice(0,"yyyy-mm-dd".length),
        image:attributes.image.data.attributes.url,
        slug:attributes.slug
    }
})
// console.log(body)
const formattedText = JSON.stringify(body,null,2)
const path = "scripts/strapi-cms-response.json";

writeFileSync(path,formattedText,"utf-8")


