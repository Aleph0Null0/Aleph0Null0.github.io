import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,
        Routes,
        Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Random from "./components/Random";
import Spooky from "./components/Spooky";
import GotLost from "./components/GotLost";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/randomizer" element={<Random />} />
          <Route path=":randNum" element={<Spooky />} />
        <Route
          path="*"
          element={<GotLost />}
        />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
