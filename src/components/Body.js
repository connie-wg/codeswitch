import Grid from '@mui/material/Grid';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import '../styles/material-palenight.css';
import EditorTabs from './EditorTabs';
import ShellTab from './ShellTab'

function Text() {
  return (
    <CodeMirror 
      theme='dark'
      value="console.log('hello world!');"
      height="600px"
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
            <Grid item xs={8}>
                <EditorTabs></EditorTabs>
            </Grid>
            <Grid item xs={4}>
                <ShellTab></ShellTab>
            </Grid>          
        </Grid>
    );
}
