import React from 'react'
import Image from 'next/image'

interface UsersTeam {
   name: string;
   image: string;
   description: string;
}

const UsersTeamMov = (userTeam: UsersTeam) => {
   return (
      <div className='flex flex-col m-2 px-6'>
         <div className='flex content-center justify-center'>
            <Image 
               src={userTeam.image}
               width={200}
               height={200}
               className='rounded-full'
               objectFit='cover'
            />
         </div>
         <p className='text-center mt-2 text-gray-700'>{userTeam.name}</p>
         <p className='text-justify mt-2 text-gray-700'>{userTeam.description}</p>
      </div>
   )
}

export default UsersTeamMov;
