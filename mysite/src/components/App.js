import '../styles/App.css';
import {Outlet, Link} from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/material';
import theme from './theme.js';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Container>
      <h1>asdfasdf</h1>stuff in the cornerrr
      <header className="App-header">
          <nav style={{
            borderBottom: "solid 30px"
          }}>
            <Link to="/home">a page</Link> |{" "}
            <Link to="/projects">second page</Link> |{" "}
            <Link to="/randomizer">randomizer</Link>
          </nav>
          <Outlet />
      </header>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
