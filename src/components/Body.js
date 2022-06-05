import Grid from '@mui/material/Grid';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import React, { useState, useEffect } from 'react'
import '../styles/material-palenight.css';
import EditorTabs from './EditorTabs';
import ShellTab from './ShellTab';

export default function Body({currLang}) {
    const [consoleOut, setConsoleOut] = useState('');


    return (
        <Grid container spacing={0}> 
            <Grid item xs={8} >
                <EditorTabs currLang={currLang} setOut={setConsoleOut}></EditorTabs>
            </Grid>
            <Grid item xs={4}>
                <ShellTab consoleOut={consoleOut}></ShellTab>
            </Grid>          
        </Grid>
    );
}
