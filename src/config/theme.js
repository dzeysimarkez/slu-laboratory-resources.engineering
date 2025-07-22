// src/theme.js
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    // You can override existing colors like 'primary', 'secondary', 'error', etc.
    primary: {
      main: '#3949ab', // A custom red-orange as your main primary color
      light: '#9fa8da', // Lighter shade (optional, MUI can calculate if not provided)
      dark: '#1a237e',  // Darker shade (optional)
      contrastText: '#FFFFFF', // Text color that contrasts well (optional)
    },
    secondary: {
      main: '#4CAF50', // A custom green for secondary actions
      contrastText: '#FFFFFF',
    },

    // Or, you can add completely new custom color names to the palette
    myCustomColor: { // This is your new custom color name
      main: '#9C27B0', // A shade of purple
      light: '#BA68C8',
      dark: '#7B1FA2',
      contrastText: '#FFFFFF',
    },
    brandBlue: { // Another custom color
      main: '#2196F3', // A standard blue
      light: '#64B5F6',
      dark: '#1976D2',
      contrastText: '#FFFFFF',
    },
    // You can also add more direct hex codes under a different key
    neutralGrey: {
        main: '#EEEEEE',
        dark: '#BDBDBD',
        light: '#FAFAFA',
        contrastText: '#212121',
    },
    // You can even add custom properties that are just hex codes if you don't need shades
    alertRed: '#F44336',
    softGreen: '#A5D6A7',
  },
  // You can also customize typography, spacing, breakpoints, etc., here
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default customTheme;