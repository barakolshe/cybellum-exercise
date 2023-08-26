import { createTheme } from '@mui/material/styles';

// Custom colors
declare module '@mui/material/styles' {
  interface Palette {
    outline: Palette['primary'];
    button: string;
  }
  interface PaletteOptions {
    outline: PaletteOptions['primary'];
    button: string;
  }
}

const palette = {
  primary: {
    main: 'hsla(255, 5%, 16%, 1)',
  },
  secondary: {
    main: 'hsla(33, 29%, 62%, 1)',
    contrastText: 'hsla(30, 27%, 13%, 1)',
  },
  text: {
    primary: 'hsla(255, 7%, 11%, 1)',
    secondary: 'hsla(0, 0%, 30%, 1)',
  },
  error: {
    main: 'hsla(0, 75%, 42%, 1)',
  },
  background: {
    default: 'hsla(240, 9%, 98%, 1)',
    paper: 'hsla(240, 9%, 98%, 1)',
  },
  outline: {
    main: 'hsla(0, 0%, 48%, 1)',
    light: 'hsla(0, 0%, 58%, 1)',
  },
  button: 'hsla(0, 0%, 30%, 0.08)',
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 1280, // Custom value
    lg: 1470, // Custom value
    xl: 1680, // Custom value
  },
};

const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
    h1: {
      fontSize: '1.9rem', // font size for mobile screens
      fontWeight: '300',
      fontStyle: 'normal',
      lineHeight: '2.75rem',
      letterSpacing: '-0.5px',
      color: palette.text.primary,
      [`@media (min-width:${breakpoints.values.sm}px)`]: {
        fontSize: '3rem',
        lineHeight: '4rem',
      },
      [`@media (min-width:${breakpoints.values.lg}px)`]: {
        fontSize: '3.5rem',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
          margin: '0',
          padding: '0',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'auto',
          margin: '0',
          padding: '0',
        },
        '#root': {
          height: '100%',
          margin: '0',
          padding: '0',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          legend: {
            span: {
              display: 'none',
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& > .MuiInputLabel-root': {
            position: 'unset',
            transform: 'unset',
          },
          '& fieldset': {
            top: 0,
          },
          '& label + div fieldset': {
            top: -5,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 'unset',
        },
      },
    },
  },
  palette: { ...palette },
  breakpoints: { ...breakpoints },
});

export default theme;
