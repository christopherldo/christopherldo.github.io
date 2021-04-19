import React from 'react'
import { HashRouter } from 'react-router-dom';
import { Template, Header, Footer } from './components';
import Routes from './Routes';

const App = () => {
  return (
    <HashRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </HashRouter>
  );
};

export default App;
