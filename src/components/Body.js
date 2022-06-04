import Grid from '@mui/material/Grid';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import React, { useState, useEffect } from 'react'
<<<<<<< HEAD

function Text() {
  const [frenCode, setFrenCode] = useState("console.log('hello world!');");
  const [engCode, setEngCode] = useState('');

  const runCode = async(e) => {
    e.preventDefault();
    const codeInfo = {frenCode};

    const response = await fetch("/translate_code", {
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
  const test = () => {
    console.log(frenCode);
  }

  return (
    <>
      <CodeMirror
        value={"yo yo yo "}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
          setFrenCode(value);
        }}
      />
      <button onClick={test}>
        Hi
      </button>
    </>
  );
}
=======
import '../styles/material-palenight.css';
import EditorTabs from './EditorTabs';
import ShellTab from './ShellTab';
>>>>>>> 02acff15118b7bb3aa63fd5dd2bc3c162fca3155

export default function Body() {
    const [frenCode, setFrenCode] = useState("console.log('hello world!');");
    const [engCode, setEngCode] = useState('');
    return (
        <Grid container spacing={0}> 
            <Grid item xs={8} >
                <EditorTabs></EditorTabs>
            </Grid>
            <Grid item xs={4}>
                <ShellTab></ShellTab>
            </Grid>          
        </Grid>
    );
}
