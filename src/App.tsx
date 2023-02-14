import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Layout, Typography, Space } from 'antd'

import { HomePage, Navbar, Exchanges, Cryptocurrencies, News, CryptoDetails } from "../components"

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
      </main>

      <footer className="footer">

        

      </footer>

    </div>
  )
}

export default App