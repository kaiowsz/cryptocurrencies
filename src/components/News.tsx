import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from "antd"
import moment from "moment"
import Loader from './Loader'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"

function News({simplified}: any) {

  const [newsCategory, setNewsCategory] = useState("")

  const { data: cryptoNews } = useGetCryptoNewsQuery({count: simplified ? 5 : 20})

  console.log(cryptoNews)

  if(!cryptoNews) {
    return <Loader />
  }



  return (
    <>
    <Row gutter={[24, 24]}>

    {/* 
    
      Input select not working due to external API not accepting customized requests.
    
    */}

      {/* {!simplified && (
        <Col span={24}>
          <Select
          showSearch
          className="select-news"
          placeholder="Select a Crypto"
          optionFilterProp="children"
          onChange={(value) => console.log(value)}
          filterOption={(input, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
          </Select>


        </Col>
      )} */}


      {cryptoNews.map((news: any, index: number) => (
        <Col
        xs={24}
        sm={12}
        lg={8}
        key={index}
        >
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                  <img style={{ maxWidth: "200px", maxHeight: "100px" }} src={demoImage} alt="news" />
                </Title>
              </div>
              <p>{news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>

              <div className="provider-container">
                <div>
                  <Text>{moment(news.date).startOf("ss").fromNow()}</Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}

    </Row>


    </>
  )
}

export default News