import React from 'react'
import Footer from '../components/Footer'
import Footeresponsive from '../components/FooterResponsive'
import Navbar from '../components/Navbar'
import Navbaresponsive from '../components/Navbaresponsive'

const MainLayout = ({children}: any) => {
   return (
      <div className='flex flex-col'>
         <Navbar />
         <Navbaresponsive />
         <main>{children}</main>
         <Footer />
         <Footeresponsive />
      </div>
   )
}

export default MainLayout
