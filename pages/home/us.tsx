import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CenteredTabs from '../../components/Tabs'

const InfoMov = () => {
   return (
      <div className='overflow-hidden'>
         <Navbar />
         <CenteredTabs />
         <main className='h-screen'>
            Nosotros
         </main>
         <Footer />
      </div>
   )
}

export default InfoMov
