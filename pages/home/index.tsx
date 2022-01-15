import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import MainLayout from '../../layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
        <div className='flex flex-col'>
          <Head>
            <title>Home | Movitun</title>
          </Head>
        </div>
    </MainLayout>
  )
}

export default Home
