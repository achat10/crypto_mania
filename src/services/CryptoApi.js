import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
   'x-rapidapi-key': '6ac5481ae4msh4b0179755ccc764p133f9ajsn1df2d600559e'
}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest= (url)=>({
url,headers:cryptoApiHeaders
})

export const CryptoApi=createApi({
    reducerPath:'CryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
            getCryptos:builder.query({
                query:(count)=>createRequest(`/coins?limit=${count}`)
              }),
            getExchanges:builder.query({
                query:()=>createRequest(`/exchanges`)
              }),
            getCryptoDetails:builder.query({
                query:(coinId)=>createRequest(`/coin/${coinId}`)
              }),
            getCryptoHistory:builder.query({
                query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history/${timePeriod}`)
            })
    })
})

export const {useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery}= CryptoApi;