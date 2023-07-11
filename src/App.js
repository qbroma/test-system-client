import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignIn />
      <SignUp />
      <ResetPassword />
    </ThemeProvider>
  );
}
