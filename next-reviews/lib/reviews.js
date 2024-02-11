/*
    I am defining a function gloally that read markdown file and returning a front matter text from a markdown. I am using a dynamic
    markdown every time using the concept of slug.

    readFile is a function of reading file on server.
    readdir is a function for reading all the files present in a given directory
*/

import { readFile, readdir } from "node:fs/promises"
import matter from 'gray-matter';
import { marked } from "marked";

// fetching cms API for getting reviews
import { writeFileSync } from "node:fs"
import qs from "qs"
import { CACHE_TAG_REVIEWS, CMS_URL } from "./constants";


// single file read (for a single review)
const getReview = async (slug) => {
    // console.log(slug)
    const { data } = await fetchReviews({
        filters: {
            slug: {
                $eq: slug,
            }
        },
        fields: ["slug", "title", "publishedAt", "body"],
        // populate:"*"
        populate: {
            image: {
                fields: ["url"]
            }
        },
        pagination: {
            pageSize: 1,
            withCount: false
        }
    })

    // check for valid slug or not 
    if (data.length === 0 ){
        return null
    }
    let item = data[0];

    return {
        ...toReview(item),
        body: marked(item.attributes.body, { headerIds: false, mangle: false })
    }
}

// reading all files (for displaying all review cards )
const getAllReviews = async (pageSize,page) => {
    // console.log("FETCH FUNCTION IS RUNNING ....")
    const { data,meta } = await fetchReviews({
        fields: ["slug", "title", "publishedAt", "subtitle"],
        // populate:"*"
        populate: {
            image: {
                fields: ["url"]
            }
        },
        sort: ["publishedAt:desc"],
        pagination: {
            pageSize: pageSize,
            page:page
        }
    })

    let allReviewsArray = data.map(toReview)

    return {
        allReviews:allReviewsArray,
        pageCount:meta.pagination.pageCount
    }

}

const toReview = (item) => {
    // this function is for making customize data for displaying reviews
    let { attributes } = item;
    return {
        title: attributes.title,
        date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
        image: `${CMS_URL}${attributes.image.data.attributes.url}`,
        slug: attributes.slug,
    }
}

const fetchReviews = async (params) => {

    const query = qs.stringify(
        params,
        { encodeValuesOnly: true })

    const url = `${CMS_URL}/api/reviews?${query}`;
    const response = await fetch(url,{

        // ====== This is time based revalidation
        // next:{
        //     revalidate: 30       // seconds
        // }

        // ===== This is On Demand Revalidation 
        next:{
            tags:[CACHE_TAG_REVIEWS]
        }
    });
    if (!response.ok) {
        throw new Error(`CMS is throwing ${response.status} on this ${url}`)
    }
    return await response.json();
}

const getSlugs = async () => {
    // const allFiles = await readdir('./content/reviews');
    // let slugs = allFiles.filter(file => file.endsWith('.md')).map(file => file.split('.')[0]);
    // return slugs;
    const { data } = await fetchReviews({
        fields: ["slug"],
        sort: ["publishedAt:desc"]
    })

    let allSlugs = data.map(item => item.attributes.slug);
    return allSlugs
}


export { getReview, getAllReviews, getSlugs, fetchReviews, toReview }
