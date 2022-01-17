import React from 'react'
import Head from 'next/head'
import CenteredTabs from '../../components/Tabs'
import MainLayout from '../../layouts/MainLayout'

const InfoMov = () => {
   return (
      <MainLayout>
         <div className='flex flex-col h-min'>
            <Head>
               <title>Nosotros | Movitun</title>
            </Head>
            <CenteredTabs />
         </div>
      </MainLayout>
   )
}

export default InfoMov
