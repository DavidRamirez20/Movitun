import React from 'react'
import Link from 'next/link'

interface CardsType {
   name: string;
   image: string;
   link: string;
}

const Cards = (cardType: CardsType) => {
   return (
      <li className='m-10 bg-cyan-200 shadow-md rounded-lg hover:cursor-pointer hover:scale-[1.02]'>
         <Link href={cardType.link}>
            <div className='flex w-[240px] h-[350px]'>
               <img src={cardType.image} alt={cardType.name} className='rounded-t-lg'/>
            </div>
         </Link>
         <span className="flex text-white m-5 font-bold text-xl justify-center">{cardType.name}</span>
      </li>
   )
}

export default Cards;
