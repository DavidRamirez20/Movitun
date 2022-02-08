import React from 'react'

interface DocsM {
   name: string;
   description: string;
   date: string;
   linkTO: string;
}

const DocsMov = (docsM: DocsM) => {
   return (
      <li>
         <a href={docsM.linkTO} className='flex flex-row mb-4'>
            <i className="fas fa-file-alt text-5xl m-0 p-6 text-[#7B9E87] hover:scale-105"></i>
            <ul className='mx-4 pt-3 hover:translate-x-2'>
               <li className='text-xl font-semibold'>{docsM.name}</li>
               <li className='text-blue-400'>{docsM.date}</li>
               <li className='text-justify'>{docsM.description}</li>
            </ul>
         </a>
      </li>
   )
}

export default DocsMov;
