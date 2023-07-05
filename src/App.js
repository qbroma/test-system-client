import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function App() {
  return (
      <div>
          <TextField id="outlined-basic" label="Somethin went wrong" variant="outlined" />
          <Button variant="contained" color="secondary">Text</Button>
          <Button variant="outlined" color="error">Text</Button>
      </div>
  );
}
