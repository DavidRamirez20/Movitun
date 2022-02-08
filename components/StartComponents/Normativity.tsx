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
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Enero</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Febrero</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Marzo</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Abril</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Mayo</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Junio</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Julio</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Agosto</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Septiembre</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Octubre</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Noviembre</li>
                     <li className='hover:cursor-pointer hover:scale-105 hover:translate-x-2'>Diciembre</li>
                  </ul>
               </div>
               <div className='m-0 p-4 lg:w-4/5'>
                  <h1 className='ml-24 font-bold text-3xl'></h1>
                  <ul className='flex flex-col mt-4 lg:ml-10'>
                     <DocsMov 
                        name='Decreto No. 582'
                        description='REGLAMENTO DEL RÉGIMEN DE COLABORACIÓN PÚBLICO-PRIVADA: 
                           La iniciativa de cualquier Proyecto puede provenir de cualquiera de los órganos y entidades del sector 
                           público titulares de la competencia a ser delegada.'
                        date='18 - Febrero - 2015' 
                        linkTO='https://drive.google.com/file/d/1W1aKYYE5uy4d2uBimofvEeeZCSzGJz51/view?usp=sharing'                     
                     />
                     <DocsMov 
                        name='Decreto No. 810'
                        description='REGLAMENTO DE APLICACIÓN DEL RÉGIMEN EXCEPCIONAL DE DELEGACIÓN DE SERVICIOS PÚBLICOS DE TRANSPORTE:
                           El presente reglamento normará todas las modalidades de delegación de la prestación de un servicio
                           público, incluyendo la gestión integral del mismo, el desarrollo de infraestructura para su provisión o ambos;'
                        date='5 - Julio - 2011' 
                        linkTO='https://drive.google.com/file/d/1f33X1axWFf2sYNEzWDawYZOnsSj9rzsR/view?usp=sharing'                     
                     />
                     <DocsMov 
                        name='Suplemento del Registro Oficial 398'
                        description='LEY ORGÁNICA DE TRANSPORTE TERRESTRE TRÁNSITO Y SEGURIDAD VIAL: 
                           La Comisión Nacional de Transporte Terrestre, Tránsito y Seguridad Vial, se entenderá que se refiere a La Agencia Nacional
                           de Regulación y Control del Transporte Terrestre, Tránsito y Seguridad Vial (ANRCTTTSV), que
                           también podrá ser conocida como Agencia Nacional de Tránsito A.N.T.'
                        date='21 - Agosto - 2018' 
                        linkTO='https://drive.google.com/file/d/1YXFb6-L5pSAohpDsE5Gswwkcw9EEoMHG/view?usp=sharing'
                     />
                     <DocsMov 
                        name='Suplemento del Registro Oficial 652'
                        description='LEY ORGÁNICA DE INCENTIVOS PARA ASOCIACIONES PÚBLICO-PRIVADAS Y LA INVERSIÓN EXTRANJERA:
                           Esta Ley tiene por objeto establecer incentivos para la ejecución de proyectos bajo la modalidad de asociación público-privada y
                           los lineamientos e institucionalidad para su aplicación.'
                        date='15 - Diciembre - 2015' 
                        linkTO='https://drive.google.com/file/d/1sTg0J1uK_6MRXlKPbIhI9gbmqs0fiQKn/view?usp=sharing'
                     />
                  </ul>
               </div>
            </div>
         </div>
      </TabPanel>
   )
}

export default NormativityMov;
