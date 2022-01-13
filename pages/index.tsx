import React from 'react'
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Navbaresponsive from '../components/Navbaresponsive';

const index = () => {
   return (
      <div>
         <Head>
         <title>Movitun</title>
         </Head>
         <Navbar />
         <Navbaresponsive />
      </div>
   )
}

export default index;
