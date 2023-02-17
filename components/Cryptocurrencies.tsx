import React, {useEffect, useState} from 'react'
import millify from 'millify'
import Link from 'next/link'
import { Card, Row, Col, Input } from "antd"
import Loader from './Loader'

import { useGetCryptosQuery } from '../services/cryptoApi'

function Cryptocurrencies({ simplified }: any) {

  const count = simplified ? 10 : 100

  const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin: any) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

    setCryptos(filteredData)

  }, [cryptosList, searchTerm])

  if(isFetching) {
    return <Loader />
  }


  return (
    <>

    { !simplified && <div className="search-crypto">
      <Input placeholder="Search cryptocurrency" onChange={e => setSearchTerm(e.target.value)} />
    </div>}

    <Row gutter={[32, 32]} className="crypto-card-container">
      {cryptos && cryptos.map((currency: any, index: any) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
            <Link href={`/crypto/${currency.uuid}`}>
              <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl} />}
              hoverable 
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