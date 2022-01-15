import React, {useState} from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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
         <div className='flex flex-col m-0'>
            <div className='flex lg:flex-row flex-col m-4 p-3'>
               <Image 
                  src='https://images.unsplash.com/photo-1641843311163-1eb2eeba3c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  width={1000}
                  height={100}
                  layout='responsive'
               />
               <p className='m-4 text-justify'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima distinctio dolore. 
                  Dicta fugiat voluptatum impedit possimus, ad labore obcaecati, unde ipsam commodi placeat atque sit, sint quibusdam modi. Consequuntur!
               </p>
            </div>
            <div className='flex lg:flex-row flex-col m-4 p-3'>
               <Image 
                  src='https://images.unsplash.com/photo-1641627423776-66c115e609e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                  width={'1000rem'}
                  height={'500rem'}
                  layout='fixed'
               />
               <p className='m-4 text-justify'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima distinctio dolore. 
                  Dicta fugiat voluptatum impedit possimus, ad labore obcaecati, unde ipsam commodi placeat atque sit, sint quibusdam modi. Consequuntur!
               </p>
            </div>
         </div>
      </TabPanel>
   )
}

export default NormativityMov;
