import LoopIcon from '@mui/icons-material/Loop';
import Grid from '@mui/material/Grid';

export default function Header() {
  return (
    <Grid container alignItems="center">
      <LoopIcon sx={{color: '#E1D3FF', fontSize:40, marginRight:2}}></LoopIcon>
      <h1 style={{color: '#E1D3FF'}}>CodeSwitch</h1>
    </Grid>
  
  );
}