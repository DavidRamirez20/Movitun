import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NewsMov from './StartComponents/News';
import PrincipalMov from './StartComponents/Principal';

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
      <Box>
         <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
         >
            <Tab label="Principal" {...a11yProps(0)} />
            <Tab label="Noticias" {...a11yProps(1)} />
            <Tab label="Novedades" {...a11yProps(2)} />
         </Tabs>
         <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            >
            <NewsMov />
            <PrincipalMov />
         </SwipeableViews>
      </Box>
   );
}