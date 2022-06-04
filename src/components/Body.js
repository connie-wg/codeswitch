import Grid from '@mui/material/Grid';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import React, { useState, useEffect } from 'react'

function Text() {
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

  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}

export default function Body() {
    return (
        <Grid container spacing={0}> 
            <Grid item xs={8} sx={{bgcolor: 'blue'}}>
                <Text></Text>
            </Grid>
            <Grid item xs={4} sx={{bgcolor: 'red'}}>
                <Text></Text>
            </Grid>          
        </Grid>
    );
}