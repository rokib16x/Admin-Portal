import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6E62E5',
      light: '#8A84E2',
      dark: '#4B45A1',
    },
    secondary: {
      main: '#22B07D',
      light: '#65C9A7',
      dark: '#187B57',
    },
    success: {
      main: '#22B07D',
      light: '#65C9A7',
      dark: '#187B57',
    },
    error: {
      main: '#FF6B6B',
      light: '#FF8F8F',
      dark: '#CC5555',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2B3674',
      secondary: '#A3AED0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#2B3674',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#2B3674',
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid #E9EDF7',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

