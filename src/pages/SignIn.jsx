import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { BrowserRouter } from 'react-router-dom';

function SignIn() {
  return (
    <BrowserRouter>
      <Container
        maxWidth="sm"
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Log Into Quizzy
          </Typography>
          <TextField label="Email" fullWidth />
          <TextField label="Password" fullWidth sx={{ my: 2 }} />
          <Button variant="contained" size="large" fullWidth>
            Log In
          </Button>
          <Box sx={{ mt: 2 }}>
            <Link href="#" variant="body2" sx={{ mr: 1 }}>
              Forgot password?
            </Link>
            <Link href="#" variant="body2">
              Sign Up for Quizzy
            </Link>
          </Box>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default SignIn;
