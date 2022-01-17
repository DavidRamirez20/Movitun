import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../../layouts/MainLayout'

const ClienteMov = () => {
   return (
      <MainLayout>
         <div className='flex flex-col'>
            <Head>
               <title>Proveedores | Movitun</title>
            </Head>
            <div className='flex flex-col static'>
               <div className='flex items-center static'>
                  <Image 
                     src='https://images.pexels.com/photos/8867261/pexels-photo-8867261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                     width={1800}
                     height={900}
                     objectFit='contain'
                  />
               </div>
               <p className='border-2 h-24 w-24 absolute inset-x-96 -bottom-56'>Hola</p>
            </div>
            <div className='h-12'></div>
            <div>Hola</div>
         </div>
      </MainLayout>
   )
}

export default ClienteMov
