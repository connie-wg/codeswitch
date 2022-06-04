import Grid from '@mui/material/Grid';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import React, { useState, useEffect } from 'react'
import '../styles/material-palenight.css';
import EditorTabs from './EditorTabs';
import ShellTab from './ShellTab'

function Text() {
  const [frenCode, setFrenCode] = useState("console.log('hello world!');");
  const [engCode, setEngCode] = useState('');

  const runCode = async(e) => {
    e.preventDefault();
    const codeInfo = { frenCode };
    console.log(codeInfo);

    const response = await fetch("/translate_code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(codeInfo)
    }).then(
      res => res.json()
    ).then(
      data => {
        setEngCode(data)
        console.log("response:", data);
      }
    );
  }

  return (
    <>
      <CodeMirror
        value={frenCode}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          setFrenCode(value);
        }}
      />
      <button onClick={runCode}>
        Hi
      </button>
    </>
  );
}

export default function Body() {
    const [frenCode, setFrenCode] = useState("console.log('hello world!');");
    const [engCode, setEngCode] = useState('');
    return (
        <Grid container spacing={0}> 
            <Grid item xs={8}>
                <EditorTabs></EditorTabs>
            </Grid>
            <Grid item xs={4}>
                <ShellTab></ShellTab>
            </Grid>          
        </Grid>
    );
}
