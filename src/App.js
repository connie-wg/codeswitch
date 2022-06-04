import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Body from './components/Body';

import Container from '@mui/material/TableContainer';

import Grid from '@mui/material/Grid';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  const [frenCode, setFrenCode] = useState("console.log('hello world!');");
  const [engCode, setEngCode] = useState('');

<<<<<<< HEAD
  const [data, setData] = useState([{}]);
  const [code, setCode] = useState('');
  const [engCode, setEngCode] = useState('');

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  const runCode = async(e) => {
    e.preventDefault();
    const codeInfo = {code};

    const response = await fetch("/send_code", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(codeInfo)
    }).then(
      res => res.json()
    ).then(
      data => {
        setEngCode(data)
        console.log(data.status)
      }
    );

    if (response) {
      console.log(engCode);
    }

    //console.log('worked!')
  }
  
  return (
    <div>
      <form onSubmit={runCode}>
        <label>
          Testing input
        </label>
        <input
          value={code}
          placeholder="Enter some code"
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Run</button>
      </form>
    </div>
=======
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
>>>>>>> origin/main
  )
}

export default App