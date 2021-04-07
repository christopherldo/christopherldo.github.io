import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Template, Header, Footer } from './components';
import Routes from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
};

export default App;
