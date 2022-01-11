import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const InfoMov = () => {
   return (
      <div className='flex flex-col'>
         <Head>
            <title>Nosotros | Movitun</title>
         </Head>
         <Navbar />
         <main className='h-screen bg-slate-50'>
            Nosotros
         </main>
         <Footer />
      </div>
   )
}

export default InfoMov
