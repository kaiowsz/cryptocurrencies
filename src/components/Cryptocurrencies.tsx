import React, {useState} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from "antd"

import { useGetCryptosQuery } from '../services/cryptoApi'

function Cryptocurrencies({ simplified }: any) {

  const count = simplified ? 10 : 100

  const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)


  return (
    <>
    <Row gutter={[32, 32]} className="crypto-card-container">
      {cryptos && cryptos.map((currency: any) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl} hoverable/>}
              >
                <p>Price: US$ {Number(currency.price).toFixed(2)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
      ))}
    </Row>
    
    
    </>
  )
}

export default Cryptocurrencies