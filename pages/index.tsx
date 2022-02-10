import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Navbaresponsive from '../components/Navbaresponsive';

const index = () => {
   return (
      <div className=''>
         <Head>
            <title>Movitun</title>
         </Head>
         <nav className="hidden lg:flex m-0 p-7 flex-row w-full">
            <Link href='/'>
               <div className='w-1/4 text-center hover:cursor-pointer hover:scale-105'>
                  <a>
                     <Image src='/Movitun2.png' alt='Imagen Empresa' width={100} height={80}/>
                  </a>
                  <span className='font-serif text-3xl text-gray-600'>ovitun</span>
               </div>
            </Link>
            <ul className='flex flex-row justify-evenly w-3/4 items-center'>
               <li className='text-gray-600 font-bold'>|</li>
               <li>
                  <Link href='/home'>
                     <a className='text-gray-600 font-bold hover:cursor-pointer hover:text-gray-400'>Inicio</a>
                  </Link>
               </li>
               <li className='text-gray-600 font-bold'>|</li>
               <li>
                  <Link href='/home/us'>
                     <a className='text-gray-600 font-bold hover:cursor-pointer hover:text-gray-400'>Nosotros</a>
                  </Link>
               </li>
               <li className='text-gray-600 font-bold'>|</li>
               <li>
                  <Link href='/home/client'>
                     <a className='text-gray-600 font-bold hover:cursor-pointer hover:text-gray-400'>Atención al Cliente</a>
                  </Link>
               </li>
               <li className='text-gray-600 font-bold'>|</li>
               <li>
                  <Link href='/home/contact'>
                     <a className='text-gray-600 font-bold hover:cursor-pointer hover:text-gray-400'>Contáctenos</a>
                  </Link>
               </li>
               <li className='text-gray-600 font-bold'>|</li>
               <li>
                  <Link href='/home/suppliers'>
                     <a className='text-gray-600 font-bold hover:cursor-pointer hover:text-gray-400'>Proveedores</a>
                  </Link>
               </li>
               <li className='text-gray-600 font-bold'>|</li>
            </ul>
         </nav>
         <Navbaresponsive />
         <div className='hidden m-0 px-80 lg:flex'>
            <Image
               src='/transport.svg'
               width={1700}
               height={1000}
            />
         </div>
         <div className='lg:hidden flex mt-10'>
            <Image
               src='/bookCar.png'
               width={800}
               height={600} 
            /> 
         </div>
      </div>
   )
}

export default index;
