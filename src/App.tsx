import './App.css';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Router from "./containers/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
