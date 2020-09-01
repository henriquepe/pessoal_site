import React from 'react';
import {GlobalStyle} from './styles/global';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {


  return (
    <Router>
    <Routes/>
    <GlobalStyle/>
    </Router>
  );
}

export default App;
