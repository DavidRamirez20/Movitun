import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import CenteredTabs from '../../components/Tabs'
import MainLayout from '../../layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
        <div className='flex flex-col'>
          <Head>
            <title>Home | Movitun</title>
          </Head>
          <CenteredTabs />
          <div className='bg-slate-50'>
            Hola
          </div>
        </div>
    </MainLayout>
  )
}

export default Home
