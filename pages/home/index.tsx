import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import MainLayout from '../../layouts/MainLayout'
import CarouselMov from '../../components/Carousel'
import Link from 'next/link'

const Home: NextPage = () => {
   return (
      <MainLayout>
         <div className='flex flex-col'>
            <Head>
               <title>Home | Movitun</title>
            </Head>
            <div className='flex px-10 py-3 bg-slate-200'>
               <CarouselMov />
            </div>
            <div className='flex flex-col bg-[#1e3951] p-10'>
               <p className='text-[#f9e4ba] lg:text-center text-justify'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae dolore quisquam, deserunt sint, 
                  accusamus quam omnis magni tempore officiis enim aliquid vel provident.
               </p>
               <div className='flex justify-end'>
                  <Link href='/home/us'>
                     <button className='mr-10 mt-4 w-36 h-8 bg-cyan-500 shadow-md shadow-cyan-300 rounded-md text-slate-100 ease-out hover:scale-105 hover:shadow-lg hover:shadow-cyan-300 hover:text-md'>
                        Conoce más
                        <i className="fas fa-chevron-right ml-2"></i>
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </MainLayout>
   )
}

export default Home
