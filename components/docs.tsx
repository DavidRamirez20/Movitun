import React from 'react'

interface DocsM {
   name: string;
   description: string;
   date: string;
}

const DocsMov = (docsM: DocsM) => {
   return (
      <li className='flex flex-row mb-4'>
         <i className="fas fa-file-alt text-5xl m-0 p-6 lg:border-2 rounded-full border-[#7B9E87] text-[#7B9E87] hover:scale-105"></i>
         <ul className='mx-4 pt-3 hover:scale-105 hover:translate-x-3'>
            <li>{docsM.name}</li>
            <li className='text-blue-300'>{docsM.date}</li>
            <li>{docsM.description}</li>
         </ul>
      </li>
   )
}

export default DocsMov;
