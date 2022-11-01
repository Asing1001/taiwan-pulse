import * as React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TaiwanTimeline from "./TaiwanTimeline";
import { fam } from "./trip/fam";
import { media } from "./trip/media";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const isFAM = window.location.host.includes('fam')
  const days = isFAM ? fam : media
  days.forEach(day => { day.imageFolder = isFAM ? 'fam' : 'media' })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          {days.map((_, i) => (
            <Tab key={i} label={`Day ${i + 1}`} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>

      {days.map((day, i) => (<TabPanel key={i} value={value} index={i}>
        <TaiwanTimeline {...day} />
      </TabPanel>))}
    </Box>
  );
}

