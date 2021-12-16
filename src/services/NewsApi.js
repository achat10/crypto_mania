import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const newsApiHeaders={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '6ac5481ae4msh4b0179755ccc764p133f9ajsn1df2d600559e'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com';

const createRequest= (url)=>({
    url,headers:newsApiHeaders
})

export const NewsApi=createApi({
    reducerPath:'NewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
            getNews:builder.query({
                query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
              })
    })
})

export const {useGetNewsQuery}= NewsApi;