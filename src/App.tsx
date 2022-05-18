import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routess from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routess />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
