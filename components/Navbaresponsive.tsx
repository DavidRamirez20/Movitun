import React, {useState} from 'react'
import Link from 'next/link';

const Navbaresponsive = () => {
   const [navegation, setNavegation] = useState(false);

   return (
      <div 
         className='lg:hidden bg-slate-50'
         onClick={() => {
            setNavegation(!navegation);
         }}
      >
         <i 
            className={`mx-3 my-3 fas fa-${
               navegation ? 'times' : 'bars'
            } hover:text-gray-400 cursor-pointer`}
         />
         <p className='text-center text-xl font-bold italic'>Movitun</p>
         <p className='text-center text-lg italic my-0'>Tramite unificado de movilidad</p>
         {navegation && (
            <ul className='mx-10 flex flex-col'>
               <Link href='/'>
                  <a className='text-center'>
                     <li><i className="fas fa-home"></i></li>
                  </a>
               </Link>
               <ResponsiveRoute name='Inicio' route='/home'/>
               <ResponsiveRoute name='Nosotros' route='/home/us'/>
               <ResponsiveRoute name='Servicio al Cliente' route='/home/client'/>
               <ResponsiveRoute name='Proveedores' route='/home/suppliers'/>
               <ResponsiveRoute name='Contáctenos' route='/home/contact'/>
            </ul>
         )}
      </div>
   )
}

const ResponsiveRoute = ({route, name}: any) => {
   return (
      <Link href={route}>
         <a>
            <li className='text-gray-500 border border-gray-100'>{name}</li>
         </a>
      </Link>
   )
}

export default Navbaresponsive;
