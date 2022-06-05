import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import Container from '@mui/material/TableContainer';

function App() {

  return (
    <div className='main-container'>
      <Container>
        <Header></Header>
        <Body></Body>   
      </Container>
    </div>
  )
}

export default App