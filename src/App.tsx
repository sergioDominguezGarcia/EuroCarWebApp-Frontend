import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Dashboard from './views/dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Dashboard />
      </div>
    </ThemeProvider>
  )
}

export default App;
