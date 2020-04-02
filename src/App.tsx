import React from 'react';
import Landing from './Landing';
import Navbar from './Navbar';
import { GlobalStyles } from './styles';

function App() {
  return (
    <main>
      {GlobalStyles}
      <Navbar />
      <Landing />
    </main>
  );
}

export default App;
