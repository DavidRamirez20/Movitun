import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Cards from '../../components/Cards'

const SupplierMov = () => {
   return (
      <div className='flex flex-col'>
         <Head>
            <title>Proveedores | Movitun</title>
         </Head>
         <Navbar />
         <main className='flex flex-col bg-slate-50 h-screen'>
            <div>
               <ul className='flex justify-around list-none'>
                  <Cards 
                     name = 'Carvajal'
                     image ="https://media.istockphoto.com/photos/human-figure-icon-graphic-as-user-login-button-on-white-keyboard-picture-id1226883131?b=1&k=20&m=1226883131&s=170667a&w=0&h=FMYb1DFOYbcb2vmbzZhq71k-4cuarJ1U4xCBWjGnze8="
                     link = 'https://www.carvajaltys.com/'
                  />
                  <Cards 
                     name = 'Carvajal 2'
                     image ="https://media.istockphoto.com/photos/human-figure-icon-graphic-as-user-login-button-on-white-keyboard-picture-id1226883131?b=1&k=20&m=1226883131&s=170667a&w=0&h=FMYb1DFOYbcb2vmbzZhq71k-4cuarJ1U4xCBWjGnze8="
                     link = 'https://www.carvajal.com/'
                  />
                  <Cards 
                     name = 'Carvajal 3'
                     image ="https://media.istockphoto.com/photos/human-figure-icon-graphic-as-user-login-button-on-white-keyboard-picture-id1226883131?b=1&k=20&m=1226883131&s=170667a&w=0&h=FMYb1DFOYbcb2vmbzZhq71k-4cuarJ1U4xCBWjGnze8="
                     link = 'https://www.carvajaltys.com/servicio-al-cliente/#'
                  />
               </ul>
               <div className='m-8 justify-center text-center'>
                  <span>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus, corporis perspiciatis voluptatum nam quaerat. 
                     Nostrum, praesentium tempora velit aliquid quis fugiat, magnam provident commodi sit molestiae quia explicabo perspiciatis!
                  </span>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   )
}

export default SupplierMov;
