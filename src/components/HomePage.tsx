import React from 'react'
import Navbar from "./Navbar"
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'


function HomePage() {
  // const {data, isFetching} = useGetCryptosQuery("");
  // console.log(data)

  return (
    <>
    <Typography.Title level={2} className="heading">
      Global Crypto Stats
    </Typography.Title>

    <Row>
      <Col span={12}> <Statistic title="Total Cryptocurrencies" value="5" /> </Col>
      <Col span={12}> <Statistic title="Total Exchanges" value="5" /> </Col>
      <Col span={12}> <Statistic title="Total Market Cap" value="5" /> </Col>
      <Col span={12}> <Statistic title="Total 24h Volume" value="5" /> </Col>
      <Col span={12}> <Statistic title="Total Markets" value="5" /> </Col>
    </Row>
    
    </>
  )
}

export default HomePage