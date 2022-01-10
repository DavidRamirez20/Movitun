import React from 'react'

const Navbar = () => {
   return (
      <div className='m-0 p-7 bg-slate-400' >
         <ul className='flex flex-row justify-evenly'>
            <li>Imagen Empresa</li>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Servicio al cliente</li>
            <li>Proveedores</li>
         </ul>
      </div>
   )
}

export default Navbar;