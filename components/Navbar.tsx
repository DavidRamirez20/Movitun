import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
   return (
      <nav className='hidden lg:flex m-0 p-7 bg-slate-400 flex-row w-full'>
         <div className='w-1/4 text-center'>
            <Link href='/'>
               <a>
                  <Image src='/Movitun.jpeg' alt='Imagen Empresa' width={218} height={100}/>
               </a>
            </Link>
         </div>
         <ul className='flex flex-row justify-evenly w-3/4 items-center'>
            <li className='text-gray-50'>|</li>
            <li>
               <Link href='/home'>
                  <a className='text-gray-50 hover:cursor-pointer'>Inicio</a>
               </Link>
            </li>
            <li className='text-gray-50'>|</li>
            <li>
               <Link href='/home/us'>
                  <a className='text-gray-50 hover:cursor-pointer'>Nosotros</a>
               </Link>
            </li>
            <li className='text-gray-50'>|</li>
            <li>
               <Link href='/home/client'>
                  <a className='text-gray-50 hover:cursor-pointer'>Atención al Cliente</a>
               </Link>
            </li>
            <li className='text-gray-50'>|</li>
            <li>
               <Link href='/home/suppliers'>
                  <a className='text-gray-50 hover:cursor-pointer'>Proveedores</a>
               </Link>
            </li>
            <li className='text-gray-50'>|</li>
            <li>
               <Link href='/home/contact'>
                  <a className='text-gray-50 hover:cursor-pointer'>Contáctenos</a>
               </Link>
            </li>
            <li className='text-gray-50'>|</li>
         </ul>
      </nav>
   )
}

export default Navbar;