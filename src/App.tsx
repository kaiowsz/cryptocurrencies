import React from 'react'
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import { Layout, Typography, Space } from 'antd'

import { HomePage, Navbar, Exchanges, Cryptocurrencies, News, CryptoDetails } from "./components"

function App() {
  return (
    <div className="app">

      <nav className="navbar">

        <Navbar />

      </nav>

      <main className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              <Route path="/exchanges" element={<Exchanges />} />
              
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route path="/news" element={<News />}/>

            </Routes>
          </div>
        </Layout>

        <footer className="footer" >
          <Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
            Cryptoverse &reg; <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>
      </main>

    </div>
  )
}

export default App