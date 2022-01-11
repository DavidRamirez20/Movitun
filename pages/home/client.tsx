import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const ClienteMov = () => {
   return (
      <div className='flex flex-col'>
         <Head>
            <title>Atención Cliente | Movitun</title>
         </Head>
         <Navbar />
         <main className='h-screen bg-slate-50'>
            Cliente
         </main>
         <Footer />
      </div>
   )
}

export default ClienteMov
