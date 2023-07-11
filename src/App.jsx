import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  createBrowserRouter, RouterProvider, Link as RouterLink,
} from 'react-router-dom';
import { forwardRef } from 'react';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

const router = createBrowserRouter([
  { path: '/SignIn', element: <SignIn /> },
  { path: '/SignUp', element: <SignUp /> },
  { path: '/ResetPassword', element: <ResetPassword /> },
  { path: '/', element: <div>Main Page</div> },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
