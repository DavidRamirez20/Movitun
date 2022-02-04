import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../../layouts/MainLayout'

const ClientMov = () => {
   return (
      <MainLayout>
         <div className='flex flex-col'>
            <Head>
               <title>Proveedores | Movitun</title>
            </Head>
            <div className='clientBack lg:h-screen static'>
               <div className='bg-white/50 lg:w-4/6 flex flex-row lg:absolute lg:right-52 lg:top-48 lg:rounded-lg drop-shadow-lg shadow-white backdrop-blur-md justify-center'>
                  <div className='w-1/2 flex flex-row justify-center'>
                     <span className='text-center font-bold text-xl text-gray-600 flex place-self-center px-3'>Líneas Telefónicas</span>
                     <ul className='flex flex-col p-5 ml-9 items-center justify-center'>
                        <li className='font-semibold text-lg text-gray-600'>Bogotá</li>
                        <a href='tel:057601777777'>
                           <li className='font-semibold text-lg text-gray-600 pb-5 hover:text-gray-500'>+57 (601) 777777</li>
                        </a>
                        <li className='font-semibold text-lg text-gray-600'>Cali</li>
                        <a href='tel:057601777777'>
                           <li className='font-semibold text-lg text-gray-600 pb-5 hover:text-gray-500'>+57 (602) 777777</li>   
                        </a>
                        <li className='font-semibold text-lg text-gray-600'>Medellin</li>
                        <a href='tel:057601777777'>
                           <li className='font-semibold text-lg text-gray-600 hover:text-gray-500'>+57 (604) 777777</li>
                        </a>
                     </ul>
                  </div>
                  <div className='w-1/2 flex flex-col justify-center'>
                     <span className='text-center pt-8 font-bold text-xl text-gray-600'>Correo Electrónico</span>
                     <ul className='flex flex-col p-5 items-center justify-center'>
                        <a href='mailto:servicioalcliente@tungroup.com'>
                           <li className='font-semibold text-lg text-gray-600 hover:text-blue-600 hover:underline'>servicioalcliente@movitun.com</li>
                        </a>
                     </ul>
                  </div>
               </div>
            </div>
         </div> 
      </MainLayout>
   )
}

export default ClientMov
