import React, {useState} from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import DocsMov from '../docs';

const NormativityMov = () => {
  
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
         <div className='flex flex-col m-0 lg:px-48'>
            <div className='flex lg:flex-row flex-col m-0 p-3'>
               <div className='lg:w-1/5 m-2 border-2 border-[#1e3951] lg:h-96'>
                  <p className='text-center m-0 p-3 bg-[#48759c] text-[#f9e4ba]'>DOCUMENTOS</p>
                  <ul className='flex flex-col justify-evenly m-0 p-4'>
                     <li>Enero</li>
                     <li>Febrero</li>
                     <li>Marzo</li>
                     <li>Abril</li>
                     <li>Mayo</li>
                     <li>Junio</li>
                     <li>Julio</li>
                     <li>Agosto</li>
                     <li>Septiembre</li>
                     <li>Octubre</li>
                     <li>Noviembre</li>
                     <li>Diciembre</li>
                  </ul>
               </div>
               <div className='m-0 p-4 lg:w-4/5'>
                  <h1 className='ml-24 font-bold text-3xl'>Enero</h1>
                  <ul className='flex flex-col mt-4 lg:ml-10'>
                     <DocsMov 
                        name='Resolución No. xxx' 
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima distinctio dolore.'
                        date='11 - Noviembre - 2021'
                     />
                     <DocsMov 
                        name='Resolución No. xxx' 
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima distinctio dolore.'
                        date='11 - Noviembre - 2021'
                     />
                     <DocsMov 
                        name='Resolución No. xxx' 
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima distinctio dolore.'
                        date='11 - Noviembre - 2021'
                     />
                     <DocsMov 
                        name='Resolución No. xxx' 
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima distinctio dolore.'
                        date='11 - Noviembre - 2021'
                     />
                  </ul>
               </div>
            </div>
         </div>
      </TabPanel>
   )
}

export default NormativityMov;
