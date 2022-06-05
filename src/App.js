import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import Container from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid";
import {
  Modal,
  Typography,
  FormControl,
  Select,
  Button,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/private-theming";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currLang, setCurrLang] = useState("French");
  const [submitLang, setSubmitLang] = useState("French");

  useEffect(() => {

  }, [submitLang]);

  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    setSubmitLang(currLang)
    handleClose()
  }

  const handleLangClick = (e) => {
    setCurrLang(e.target.value);
  };

  return (
    <div className="main-container" style={{backgroundColor: "#110A25"}}>
      <Container>
        <Header handleOpen={handleOpen}></Header>
        <Body currLang={submitLang}></Body>
        <Container>
          <p style={{ color: "#E1D3FF", textAlign: "center", opacity: '80%' }}>
            Developed (with love) by Connie Wang, Jenny Zhang, Jenna Xiao, and
            Razi Syed
          </p>
        </Container>
      </Container>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ paddingBottom: "2rem", fontFamily:"Courier New", fontWeight: "600"}}
          >
            Settings
          </Typography>
          <FormControl sx={{ width: "80%", color: "#E1D3FF" }}>
              Change Language
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currLang}
              label="Age"
              onChange={handleLangClick}
              sx={{ 
                color: "#E1D3FF", 
                border: "solid #E1D3FF 1px" 
              }} 
              className="form-select"
            >
              <MenuItem value={"French"}>French</MenuItem>
              <MenuItem value={"Spanish"}>Spanish</MenuItem>
            </Select>
          </FormControl>
          <Grid container flex alignItems="center" justifyContent="center" paddingTop="2rem">
            <Button  
              variant="contained" 
              sx={{"&:hover":{bgcolor:'#342458', color: "#E1D3FF", border:'solid #E1D3FF 1px'}, bgcolor: "#E1D3FF", color: '#342458', fontFamily:"Courier New",}}
              onClick={handleSubmit}>Set Language
            </Button>
            <Button variant="outlined" className="Button" onClick={handleClose} 
              sx={{"&:hover":{bgcolor:'#E1D3FF', color: "#342458", border:'solid #E1D3FF 1px'}, bgcolor: "#342458", color: '#E1D3FF', border:'solid #E1D3FF 1px', margin: '1rem', fontFamily:"Courier New",}}>Cancel
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

let style = {
  backgroundColor: "#342458",
  width: "25%",
  height: "35%",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#E1D3FF",
  flexDirection: "column",
};

export default App;
