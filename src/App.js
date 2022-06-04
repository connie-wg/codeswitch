import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

import Container from '@mui/material/TableContainer';

import Grid from '@mui/material/Grid';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function App() {

  const [frenCode, setFrenCode] = useState("console.log('hello world!');");
  const [engCode, setEngCode] = useState('');

  const test = () => {
    console.log(frenCode);
  }

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