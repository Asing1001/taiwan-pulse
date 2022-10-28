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
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [value, setValue] = useState(0)
  return (

    <ThemeProvider theme={darkTheme}>

      <Container maxWidth="sm" className="safe-top">
        <Box sx={{mb:10}}>
        {value === 0 && <TaiwanSchedule />}
        {value === 1 && <Introduction />}
        </Box>
        <Box>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              className="safe-bottom"
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Schedule" icon={<EventNoteIcon />} />
              <BottomNavigationAction label="Introduction" icon={<MenuBookIcon />} />
              <BottomNavigationAction label="Spotlight" icon={<AutoAwesomeIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;