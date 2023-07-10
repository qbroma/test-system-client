import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ResetPassword() {
    return (
        <Container
        maxWidth="sm"
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Find your account
          </Typography>
          <TextField label="Email" fullWidth sx={{ mb: 1 }}/>
          <Button variant="contained" size="large" fullWidth sx={{ my: 1 }}>
            Search
          </Button>
          <Button variant="contained" size="large" fullWidth sx={{ my: 1 }}>
            Cancel
          </Button>
        </Box>
      </Container>
    )
}

export default ResetPassword;