import React, { useState } from 'react';
import './App.css';
import { Reset } from 'styled-reset';
import Routes from './routes';
import AppContext from './vars';
import Mock from './services/mock'



function App() {
  const [user, setUser] = useState('');  
  const [logged, setLogged] = useState(false);  
  const [dataMock, setDataMock] = useState([]);  

  let auxMock = Mock()  
  if(dataMock.length === 0){
    setDataMock(Mock())
  }
  
  const userSettings = {
    user: user,
    setUser,
    logged: logged,
    setLogged,
    dataMock: dataMock,
    setDataMock
  };


  return (
    <AppContext.Provider value={userSettings}>
        <Reset/>
        <Routes/>
    </AppContext.Provider>
  );
}

export default App;
