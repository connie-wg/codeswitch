import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import Container from '@mui/material/TableContainer';
import Grid from '@mui/material/Grid';

function App() {

  return (
    <div className='main-container'>
      <Container>
        <Header></Header>
        <Body></Body>
        <Container>
          <p style={{color: '#E1D3FF', textAlign:'center'}}>Developed (with love) by Connie Wang, Jenny Zhang, Jenna Xiao, and Razi Syed</p>
        </Container>   
      </Container>
    </div>
  )
}

export default App