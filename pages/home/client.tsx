import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import MainLayout from '../../layouts/MainLayout'

const ClienteMov = () => {
   return (
      <MainLayout>
         <div className='flex flex-col'>
            <Head>
               <title>Proveedores | Movitun</title>
            </Head>
            <div className='bg-slate-50'>
               Cliente
            </div>
         </div>
      </MainLayout>
   )
}

export default ClienteMov
