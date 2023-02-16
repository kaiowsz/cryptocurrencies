import React from 'react'
import { useRouter } from 'next/router'

import { CryptoDetails } from '@/components'

function Index() {

  const router = useRouter()
  const {coinId} = router.query

  return (

    <CryptoDetails coinId={coinId} />
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true
//   }
// }

// export async function getStaticProps(context: any) {

//   const {params} = context
//   const {coinId} = params


//   const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}`, {
//     headers: {
//       'X-RapidAPI-Key': '9ae933332bmsh9e73a36775842fdp1ddcadjsn9c1793d6acec',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   })

//   const data = await response.json()

//   const responseHistory = await fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}`, {
//     headers: {
//       'X-RapidAPI-Key': '9ae933332bmsh9e73a36775842fdp1ddcadjsn9c1793d6acec',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   })

//   const dataHistory = await responseHistory.json()

//   return {
//     props: {
//       data
//     },
//     revalidate: 86400
//   }
// }

export default Index