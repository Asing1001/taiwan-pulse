import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from 'react';
import TaiwanSchedule from "./TaiwanSchedule";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [value, setValue] = useState()
  return (

    <ThemeProvider theme={darkTheme}>

      <Container maxWidth="sm">
        <TaiwanSchedule />
        <Box>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
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