import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Paper from '@mui/material/Paper';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from 'react';
import TaiwanSchedule from "./TaiwanSchedule";
import Introduction from "./Introduction";
import Spotlight from "./Spotlight";
import HideAppBar from "./HideAppBar";
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }, spacing: 4
});

function App() {
  const [value, setValue] = useState(0)
  return (

    <ThemeProvider theme={darkTheme}>
      {value !== 2 && <HideAppBar />}
      <Container maxWidth="sm" className="safe-top">

        <Box sx={{ mb: 20 }}>
          {value === 0 && <TaiwanSchedule />}
          {value === 1 && <Introduction />}
          {value === 2 && <Spotlight />}
        </Box>
        <Box>
          <Paper className="safe-bottom" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundImage: 'none' }} elevation={3}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Schedule" icon={<EventNoteIcon />} />
              <BottomNavigationAction label="Venues" icon={<MenuBookIcon />} />
              <BottomNavigationAction label="MICE Taiwan" icon={<AutoAwesomeIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;