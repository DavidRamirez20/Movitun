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
            className={`mx-3 fas fa-${
               navegation ? 'times' : 'bars'
            } hover:text-gray-400 cursor-pointer`}
         />
         {navegation && (
            <ul className='mx-3 flex flex-col text-center'>
               <ResponsiveRoute name='Inicio' route='/home'/>
               <ResponsiveRoute name='Nosotros' route='/home/us'/>
               <ResponsiveRoute name='Servicio al Cliente' route='/home/client'/>
               <ResponsiveRoute name='Proveedores' route='/home/suppliers'/>
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
