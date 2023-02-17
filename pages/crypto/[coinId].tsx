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

export default Index