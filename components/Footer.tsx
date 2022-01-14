import React from 'react'
import Image from 'next/image';

const Footer = () => {
   return (
      <footer className='w-full m-0 p-7 bg-slate-200 flex flex-row'>
         <div className='w-1/4 text-center'>
            <Image src='/Movitun.jpeg' alt='Imagen Empresa' width={218} height={100}/>
         </div>
         <ul className='flex flex-col justify-evenly w-[37.5%] items-center'>
            <li>Política de Tratamiento de Datos</li>
            <li>Aviso de Privacidad</li>
         </ul>
         <ul className='flex flex-col justify-evenly w-[37.5%] items-center'>
            <li>Av. XXXXX # 00-00, Bogotá - Colombia</li>
            <li>Teléfono Bogotá: +57 (601) 777777</li>
            <li>E-mail: servicioalcliente@movitun.com</li>
         </ul>
      </footer>
   )
}

export default Footer;
