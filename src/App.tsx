import { createMuiTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import Routes from './routs';

const mainTheme = createMuiTheme({
  typography: {
    fontFamily: 'Proxima Nova,Helvetica,Arial,sans-serif;',
    h5:{
      fontWeight: 'bold',
      color: '#42925b'
    }
  }
});

function App() {
  return <ThemeProvider theme={mainTheme}><Routes/></ThemeProvider>;
}

export default App;
