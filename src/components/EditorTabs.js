//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, IconButton } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function Text(props) {

  return (
    <CodeMirror 
      theme='dark'
      value={props.code}
      height="600px"
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        props.setCode(value);
      }}
    />  
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function EditorTabs() {
  const [value, setValue] = React.useState(0);

  const [frenCode, setFrenCode] = useState("console.log('hello world!');");
  const [engCode, setEngCode] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const runCode = async(e) => {
    e.preventDefault();
    const codeInfo = { frenCode };
    console.log(codeInfo);

    await fetch("/translate_code", {
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Grid container>
          <Grid item xs={11}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{width: '50%'}}>
              <Tab label="French.js" {...a11yProps(0)} />
              <Tab label="English.js" {...a11yProps(1)} />
            </Tabs>
          </Grid>
          <Grid item>
            <IconButton onClick={runCode}><PlayArrowOutlinedIcon></PlayArrowOutlinedIcon></IconButton>
            <IconButton><FileDownloadOutlinedIcon></FileDownloadOutlinedIcon></IconButton>
          </Grid>
        </Grid>
      </Box>
      <TabPanel value={value} index={0}>
        <Text code={frenCode} setCode={setFrenCode}></Text>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Text code={frenCode} setCode={setFrenCode}></Text>
      </TabPanel>
    </Box>
  );
}
