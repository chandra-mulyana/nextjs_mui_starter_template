// @ts-nocheck
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
palette: {
    type: 'light',
    primary: {
      main: '#003688',
      light: '#0098d4',
      dark: '#00255f',
    },
    secondary: {
      main: '#990000',
      dark: '#b42217',
      light: '#ad3333',
    },
    error: {
      main: '#990000',
      dark: '#b42217',
      light: '#ad3333',
    },
    info: {
      main: '#0098d4',
      light: '#33acdc',
      dark: '#006a94',
    },
    success: {
      main: '#84b817',
      light: '#9cc645',
      dark: '#5c8010',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.54)',
      disabled: 'rgba(0,0,0,0.38)',
      hint: 'rgba(0,0,0,0.38)',
    },
    warning: {
      main: '#ff9800',
      light: '#ffac33',
      dark: '#b26a00',
    },
    divider: 'rgba(0,0,0,0.12)',
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
