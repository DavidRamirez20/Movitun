import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const index = () => {
   return (
      <div className='HomeBack h-screen bg-cover'>
         <Head>
         <title>Movitun</title>
         </Head>
         <nav className="hidden lg:flex m-0 p-7 flex-row w-full">
            <Link href='/'>
               <div className='w-1/4 text-center hover:cursor-pointer hover:scale-105'>
                  <a>
                     <Image src='/Movitun2.png' alt='Imagen Empresa' width={100} height={80}/>
                  </a>
                  <span className='font-serif text-3xl text-gray-50'>ovitun</span>
               </div>
            </Link>
            <ul className='flex flex-row justify-evenly w-3/4 items-center'>
               <li className='text-gray-50 font-bold te'>|</li>
               <li>
                  <Link href='/home'>
                     <a className='text-gray-50 font-bold hover:cursor-pointer hover:text-gray-200'>Inicio</a>
                  </Link>
               </li>
               <li className='text-gray-50 font-bold'>|</li>
               <li>
                  <Link href='/home/us'>
                     <a className='text-gray-50 font-bold hover:cursor-pointer hover:text-gray-200'>Nosotros</a>
                  </Link>
               </li>
               <li className='text-gray-50 font-bold'>|</li>
               <li>
                  <Link href='/home/client'>
                     <a className='text-gray-50 font-bold hover:cursor-pointer hover:text-gray-200'>Atención al Cliente</a>
                  </Link>
               </li>
               <li className='text-gray-50 font-bold'>|</li>
               <li>
                  <Link href='/home/suppliers'>
                     <a className='text-gray-50 font-bold hover:cursor-pointer hover:text-gray-200'>Proveedores</a>
                  </Link>
               </li>
               <li className='text-gray-50 font-bold'>|</li>
               <li>
                  <Link href='/home/contact'>
                     <a className='text-gray-50 font-bold hover:cursor-pointer hover:text-gray-200'>Contáctenos</a>
                  </Link>
               </li>
               <li className='text-gray-50 font-bold'>|</li>
            </ul>
         </nav>
         <div>

         </div>
      </div>
   )
}

export default index;
