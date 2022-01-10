import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const CenteredTabs = () => {
   const [value, setValue] = useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
         <Tabs value={value} onChange={handleChange} centered>
         <Tab label="Item One" />
         <Tab label="Item Two" />
         <Tab label="Item Three" />
         </Tabs>
      </Box>
   );
}

export default CenteredTabs;