import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CenteredTabs from '../../components/Tabs'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Home | Movitun</title>
      </Head>
      <Navbar />
      <CenteredTabs />
      <main className='h-screen bg-slate-50'>
        Hola
      </main>
      <Footer />
    </div>
  )
}

export default Home
