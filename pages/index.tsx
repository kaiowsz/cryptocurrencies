import Head from 'next/head'

import React from 'react'

import Link from 'next/link'

import { Layout, Typography, Space } from 'antd'

import { HomePage, Navbar, Exchanges, Cryptocurrencies, News, CryptoDetails } from "@/components"

export default function Home() {
  return (
    <>
        <HomePage />
    </>
  )
}
