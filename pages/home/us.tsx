import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import MainLayout from '../../layouts/MainLayout'

const InfoMov = () => {
   return (
      <MainLayout>
         <div className='flex flex-col'>
            <Head>
               <title>Nosotros | Movitun</title>
            </Head>
            <div className='bg-slate-50'>
               Nosotros
            </div>
         </div>
      </MainLayout>
   )
}

export default InfoMov
