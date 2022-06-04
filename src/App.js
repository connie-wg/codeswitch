import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

import Container from '@mui/material/TableContainer';

function App() {

  // document.body.style.backgroundColor = "#110A25";

  return (
    <>
      <Container>
        <Header></Header>
        <Body></Body>
      </Container>
    </>
  )
}

export default App