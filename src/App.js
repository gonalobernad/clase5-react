import { ThemeProvider } from '@emotion/react';
import { Button, createMuiTheme } from '@mui/material';
import { brown, orange } from '@mui/material/colors';
import remaxColor from './components/utils/remaxColor';
import ClickableComponent from './components/clickable/clickable';
import NavBar from './components/navbar/navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: remaxColor[500]
    },
    secondary: {
      main: brown[500]
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Button variant="contained">Click</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
