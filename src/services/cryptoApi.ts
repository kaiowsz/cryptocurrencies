import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '9ae933332bmsh9e73a36775842fdp1ddcadjsn9c1793d6acec',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com' 
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url: any) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const { useGetCryptosQuery } = cryptoApi