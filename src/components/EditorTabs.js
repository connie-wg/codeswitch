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
import { styled } from '@mui/material/styles';
import { yeetle } from '../styles/code-theme.ts';
import {EditorView} from "@codemirror/view";
import Tooltip from '@mui/material/Tooltip';
import { blue } from '@mui/material/colors';

function FrenchText( props ) {
  return (
    <CodeMirror 
      theme={yeetle}
      value={props.code}
      height="600px"
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        props.setCode(value);
      }}
    />
  );
}

function EnglishText( props ) {
  return (
    <CodeMirror 
      theme={yeetle}
      value={props.code}
      height="600px"
      extensions={[javascript({ jsx: true })]}
      readOnly={true}
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
        <Box sx={{ p: 0, borderRight: 'solid #5A4687 4px'}}>
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

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#AA84FF',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    backgroundColor: '#2E1F4E',
    fontFamily: 'Courier New',
    color: '#D0C7E4',
    '&.Mui-selected': {
      backgroundColor: '#342458',
      color: '#D0C7E4',
    },
    width: '170px',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }),
);

export default function EditorTabs( props ) {
  const [value, setValue] = React.useState(0);
  const [currentTab, setCurrentTab] = useState('french');
  const [frenCode, setFrenCode] = useState("console.log('hello world!');");
  const [engCode, setEngCode] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const runCode = async(e) => {
    e.preventDefault();
    const codeInfo = { frenCode };

    // console.log(codeInfo);

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
        // console.log("response:", data);
        tempRun(data);
      }
    );
  }

  const tempRun = (code) => {
    const oldLog = console.log;
    console.log = function(message){
      props.setOut((prev) => prev ? (prev + '\n' + message) : message);
    }

    const oldError = console.error;
    console.error = function(e){
      props.setOut((prev) => prev ? (prev + '\n' + e) : e);
    }

    try {
      const f = new Function(code);
      f();
    } catch (e){
      console.error(e);
    }

  }

  const handleDownload = () => { 
  } 
  
  const changeColor = () => {
    if (currentTab == 'french') return '#2D2445';
    if (currentTab == 'english') return '#D0C7E4';
  } 

  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Grid container>
          <Grid item xs={6}>
            <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <StyledTab onClick={() => setCurrentTab('french')} label="French.js" {...a11yProps(0)} />
              <StyledTab onClick={() => setCurrentTab('english')} label="English.js" {...a11yProps(1)} />
            </StyledTabs>
          </Grid>

          <Grid item container justifyContent="flex-end" xs={6}>
            <Tooltip title="Run code">
              <IconButton onClick={runCode}><PlayArrowOutlinedIcon sx={{color: '#D0C7E4'}}></PlayArrowOutlinedIcon></IconButton>
            </Tooltip>
            <Tooltip title={currentTab == 'french' ? 'Click on the english tab to download your code' : 'Download translated JS file'}>
              <IconButton onClick={currentTab == 'english' ? handleDownload : null}><FileDownloadOutlinedIcon sx={{color: `${changeColor()}`}}></FileDownloadOutlinedIcon></IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
      <TabPanel value={value} index={0}>
        <FrenchText code={frenCode} setCode={setFrenCode}></FrenchText>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EnglishText code={engCode} setCode={setEngCode}></EnglishText>
      </TabPanel>
    </Box>
  );
}
