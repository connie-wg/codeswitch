import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import Container from '@mui/material/TableContainer';

function App() {
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