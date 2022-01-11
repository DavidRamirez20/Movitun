import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MainLayout = ({children}: any) => {
   return (
      <div className='flex flex-col'>
         <Navbar />
         <main>{children}</main>
         <Footer />
      </div>
   )
}

export default MainLayout
