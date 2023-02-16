import React from 'react'
import Navbar from "./Navbar"
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import Link from 'next/link'
import Loader from './Loader'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { News, Cryptocurrencies } from './'


function HomePage(): JSX.Element {
  const {data, isFetching} = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats

  if(isFetching) {
    return <Loader/>
  }

  return (
    <>
    <Typography.Title level={2} className="heading">
      Global Crypto Stats
    </Typography.Title>

    <Row>
      <Col span={12}> <Statistic title="Total Cryptocurrencies" value={globalStats.total} /> </Col>
      <Col span={12}> <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /> </Col>
      <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /> </Col>
      <Col span={12}> <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /> </Col>
      <Col span={12}> <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /> </Col>
    </Row>

    <div className="home-heading-container">
      <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies</Typography.Title>
      
      <Typography.Title level={3}> <Link href="/cryptocurrencies">Show more</Link></Typography.Title>
    </div>

    <Cryptocurrencies simplified />

    <div className="home-heading-container">
      <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
      
      <Typography.Title level={3}> <Link href="/news">Show more</Link></Typography.Title>
    </div>

    <News simplified />
    
    </>
  )
}

export default HomePage