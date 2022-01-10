import Link from 'next/link';
import React from 'react'

const Navbar = () => {
   return (
      <nav className='m-0 p-7 bg-slate-400' >
         <ul className='flex flex-row justify-evenly'>
            <li>
               <Link href='/'>
                  <a>Imagen Empresa</a>
               </Link>
            </li>
            <li>
               <Link href='/home'>
                  <a>Inicio</a>
               </Link>
            </li>
            <li>
               <Link href='/home/us'>
                  <a>Nosotros</a>
               </Link>
            </li>
            <li>
               <Link href='/home/client'>
                  <a>Atención al Cliente</a>
               </Link>
            </li>
            <li>
               <Link href='/home/suppliers'>
                  <a>Proveedores</a>
               </Link>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar;