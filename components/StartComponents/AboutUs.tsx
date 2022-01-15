import React, {useState} from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';

const AboutUsMov = () => {

   interface TabPanelProps {
      children?: React.ReactNode;
      dir?: string;
      index: number;
      value: number;
   }

   function TabPanel(props: TabPanelProps) {
      const { children, value, index, ...other } = props;
   
      return (
         <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
         >
            {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
            )}
         </div>
      );
   }

   const theme = useTheme();
   const [value, setValue] = useState(0);

   return (
      <TabPanel value={value} index={0} dir={theme.direction}>
         <div className='flex flex-col'>
            <div className='flex lg:flex-row flex-col border border-slate-600 border-opacity-40 rounded-md shadow-lg p-5 w-full bg-stone-100'>
               <div className='w-1/3 text-center place-self-center'>
                  <Image
                     src='https://images.unsplash.com/photo-1640622661329-67f406a77d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                     width={387}
                     height={580}
                     className='rounded-3xl'
                  />
               </div>
               <div className='flex flex-col w-2/3 p-3 justify-center place-self-center'>
                  <p className='text-justify lg:mt-34 text-gray-700 '>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cupiditate sit numquam eaque, 
                     adipisci eos illo, similique inventore mollitia amet dolorem hic incidunt libero architecto rem veniam itaque ipsam dolores?
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cupiditate sit numquam eaque, 
                     adipisci eos illo, similique inventore mollitia amet dolorem hic incidunt libero architecto rem veniam itaque ipsam dolores?
                  </p>
                  <p className='text-center lg:mt-20 mt-10 italic text-gray-600'>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cupiditate sit numquam eaque, 
                     adipisci eos illo, similique inventore mollitia amet dolorem hic incidunt libero architecto rem veniam itaque ipsam dolores?
                  </p>
                  <p className='text-center mt-36 text-gray-500'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
               </div>
            </div>
            <h1 className='mt-14 mb-10 p-4 text-center text-5xl italic border border-t-slate-800 border-b-slate-800 border-r-0 border-l-0 w-1/2 place-self-center'>THE TEAM</h1>
            <div className='flex lg:flex-row lg:justify-evenly flex-col justify-center w-full mb-5'>
               <div className='flex flex-col'>
                  <div className='flex content-center justify-center'>
                     <Image 
                        src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        width={200}
                        height={200}
                        className='rounded-full'
                        objectFit='cover'
                     />
                  </div>
                  <p className='text-center mt-2 text-gray-700'>Johana Doe</p>
                  <p className='text-center mt-2 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div>
               <div className='flex flex-col'>
                  <div className='flex content-center justify-center'>
                     <Image 
                        src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        width={200}
                        height={200}
                        className='rounded-full'
                        objectFit='cover'
                     />
                  </div>
                  <p className='text-center mt-2 text-gray-700'>Steve Smith</p>
                  <p className='text-center mt-2 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div>
               <div className='flex flex-col'>
                  <div className='flex content-center justify-center'>
                     <Image 
                        src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80'
                        width={200}
                        height={200}
                        className='rounded-full'
                        objectFit='cover'
                     />
                  </div>
                  <p className='text-center mt-2 text-gray-700'>Julia Anderson</p>
                  <p className='text-center mt-2 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div>
            </div>
         </div>
      </TabPanel>
   )
}

export default AboutUsMov;
