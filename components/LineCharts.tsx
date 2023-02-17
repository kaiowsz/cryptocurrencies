import React from 'react'

import { Line } from 'react-chartjs-2'

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)


import { Col, Row, Typography } from "antd"


function LineCharts({ coinHistory, currentPrice, coinName }: any) {

    const coinPrice = []
    const coinTimestamp = []

    for(let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory?.data?.history[i].price)
        coinPrice.unshift(coinHistory?.data?.history[i].price);
    }

    for(let i = 0; i < coinHistory?.data?.history?.length; i++) {
        
        coinTimestamp.unshift(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: "Price in USD",
                data: coinPrice,
                fill: false,
                backgroundColor: "#0071bd",
                borderColor: "#0071bd"
            }
        ]
    }

    const options = {
        scales: {
            yAxes: 
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            
        }
    }

  return (
    <>
    <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
            {coinName} Price Chart
        </Typography.Title>
        <Col className="price-container">
            <Typography.Title level={5} className="price-change"> 
                {coinHistory?.data?.change}%
            </Typography.Title>
            <Typography.Title level={5} className="current-price"> 
                Current {coinName} Price: $ {Number(currentPrice).toFixed(2)}
            </Typography.Title>
        </Col>



    </Row>

    <Line data={data} options={{
        scales: {
            yAxes: {
                beginAtZero: true
            }
        }
    }} />


    </>
  )
}

export default LineCharts