import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function SignUp() {
  return (
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
          Create a new account
        </Typography>
        <TextField label="Email" fullWidth />
        <TextField label="Password" fullWidth sx={{ my: 2 }} />
        <Button variant="contained" size="large" fullWidth>
          Sign Up
        </Button>
        <Box sx={{ mt: 2 }}>
          <Link href="/SignIn" variant="body2">
            Already have an account?
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
