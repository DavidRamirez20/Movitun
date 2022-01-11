import Link from 'next/link';
import React from 'react'

const Navbar = () => {
   return (
      <nav className='m-0 p-7 bg-slate-400' >
         <ul className='flex flex-row justify-evenly list-none'>
            <li>
               <Link href='/'>
                  <a className='text-gray-50'>Imagen Empresa</a>
               </Link>
            </li>
            <li>
               <Link href='/home'>
                  <a className='text-gray-50'>Inicio</a>
               </Link>
            </li>
            <li>
               <Link href='/home/us'>
                  <a className='text-gray-50'>Nosotros</a>
               </Link>
            </li>
            <li>
               <Link href='/home/client'>
                  <a className='text-gray-50'>Atención al Cliente</a>
               </Link>
            </li>
            <li>
               <Link href='/home/suppliers'>
                  <a className='text-gray-50'>Proveedores</a>
               </Link>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar;