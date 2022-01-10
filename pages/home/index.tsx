import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CenteredTabs from '../../components/Tabs'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <title>Movitun Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <CenteredTabs />
      <main className='h-full bg-slate-50'>
        
      </main>
      <Footer />
    </div>
  )
}

export default Home