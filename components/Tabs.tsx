import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NewsMov from './StartComponents/News';
import AboutUsMov from './StartComponents/AboutUs';
import NormativityMov from './StartComponents/Normativity';

function a11yProps(index: number) {
   return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
   };
}

export default function FullWidthTabs() {
   const theme = useTheme();
   const [value, setValue] = useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   const handleChangeIndex = (index: number) => {
      setValue(index);
   };

   return (
      <div className='m-0 h-min'>
         <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            className='m-0border border-x-0 border-b-0 border-t-gray-300'
         >
            <Tab label="Acerca de" {...a11yProps(0)} />
            <Tab label="Normatividad" {...a11yProps(1)} />
            <Tab label="Noticias" {...a11yProps(2)} />
         </Tabs>
         <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            animateHeight={true}
            >
            <AboutUsMov />
            <NormativityMov />
            <NewsMov />
         </SwipeableViews>
      </div>
   );
}