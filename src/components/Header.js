import LoopIcon from '@mui/icons-material/Loop';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';

export default function Header({handleOpen}) {
  

  return (
    <Grid container alignItems="center">
      <Grid container xs={10} alignItems="center">
        <LoopIcon sx={{color: '#E1D3FF', fontSize:40, marginRight:2}}></LoopIcon>
        <h1 style={{color: '#E1D3FF'}}>CodeSwitch</h1>
      </Grid>
      <Grid container xs={2} sx={{justifyContent: 'flex-end'}}>
      <Button onClick={handleOpen}><SettingsIcon sx={{color: '#E1D3FF', fontSize:35, marginLeft:2}}/></Button>
      </Grid>
    </Grid>
  );
}