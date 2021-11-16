import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/header/header';
import './styles/app-styles.css';

const theme = createTheme({});

export default function App(): JSX.Element {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}
