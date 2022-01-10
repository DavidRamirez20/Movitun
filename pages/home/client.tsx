import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CenteredTabs from '../../components/Tabs'

const ClienteMov = () => {
   return (
      <div>
         <Navbar />
         <CenteredTabs />
         <main className='h-screen'>
            Cliente
         </main>
         <Footer />
      </div>
   )
}

export default ClienteMov
