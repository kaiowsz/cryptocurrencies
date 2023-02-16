import '@/styles/index.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { Navbar } from '@/components'
import {Layout, Typography, Space} from "antd"
import Link from 'next/link'

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Cryptocurrencies</title>
        <meta name="description" content="Be updated in real time by the crypto currencies in the whole world. News, cryptodetails and much more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Provider store={store}>

      <div className="app">

        <nav className="navbar">
          <Navbar />
        </nav>

      <main className="main">
        <Layout>
          <div className="routes">
            <Component {...pageProps} />
          </div>
        </Layout>

        <footer className="footer" >
          <Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
            Cryptoverse &reg; <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link href="/">Home</Link>
            <Link href="/exchanges">Exchanges</Link>
            <Link href="/news">News</Link>
          </Space>
        </footer>
      </main>
      </div>


    </Provider>
    </>
  )
}
