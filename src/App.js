import React, { useState } from 'react';
import './App.css';
import { Reset } from 'styled-reset';
import Routes from './routes';
import AppContext from './vars';

function App() {
  const [user, setUser] = useState('');  

  const userSettings = {
    user: user,
    setUser
  };

  return (
    <AppContext.Provider value={userSettings}>
        <Reset/>
        <Routes/>
    </AppContext.Provider>
  );
}

export default App;
