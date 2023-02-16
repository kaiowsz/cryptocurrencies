import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '6d1f988f8emsh29289eb18c8ad9cp1cae82jsnba2fed5616ba',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com' 
}

// https://newsdata.io/api/1/news?apikey=pub_17232d34ff9724e348c505c7777fe0234478d&q=cryptocurrency

const baseUrl = "https://crypto-news16.p.rapidapi.com"

const createRequest = (url: any) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({count}) => createRequest(`/news/top/${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi