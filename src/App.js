import { ThemeProvider } from '@emotion/react';
import { Button, createMuiTheme } from '@mui/material';
import { brown } from '@mui/material/colors';
import remaxColor from './components/utils/remaxColor';
import NavBar from './components/navbar/navbar';
import Catalogo from './components/catalogo/catalogo';

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
        <Catalogo />
      </div>
    </ThemeProvider>
  );
}

export default App;
