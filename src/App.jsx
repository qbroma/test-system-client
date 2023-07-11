import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignIn />
      <SignUp />
      <ResetPassword />
    </ThemeProvider>
  );
}

export default App;
