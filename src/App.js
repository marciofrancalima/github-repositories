import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
