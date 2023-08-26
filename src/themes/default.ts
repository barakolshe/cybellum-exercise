import { createTheme } from '@mui/material/styles';

// Ability to add a custom color
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

/* Ability to add custom variants for components.
   The pattern is:
    declare module '@mui/material/[component-name]' {
      interface [component-name]PropsVariantOverrides {
        main: true;
      }
}'*/
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    hover: true;
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

const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: '300',
      fontStyle: 'normal',
      lineHeight: '4rem',
      letterSpacing: '-0.5px',
      color: palette.text.primary,
    },
    subtitle1: {},
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'auto',
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: '0.25rem 1rem',
          height: '3rem',
        },
        input: {
          padding: '0rem !important',
          margin: '0.5rem 0rem',
          height: '1.5rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem;',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1.25rem' /* 142.857% */,
          letterSpacing: '0.25px',
          color: palette.text.secondary,
          marginLeft: '16px',
          '&.Mui-focused': {
            color: palette.text.secondary,
          },
        },
        focused: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.outline.light, // replace with your desired hover color
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.outline.main, // replace with your desired focus color
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
      variants: [
        {
          props: { variant: 'primary' }, // Custom variant
          style: {
            display: 'flex',
            borderRadius: '4px',
            width: '400px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: palette.secondary.main,
            color: palette.secondary.contrastText,
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '1.5rem' /* 150% */,
            letterSpacing: '0.15px',
            '&:hover': {
              flexShrink: 0,
              /* Elevation/light/1 */
              boxShadow: '0px 1px 3px 1px rgba(28, 27, 31, 0.15), 0px 1px 2px 0px rgba(28, 27, 31, 0.30)',
              backgroundColor: palette.secondary.main,
            },
          },
        },
        {
          props: { variant: 'hover' }, // Custom variant
          style: {
            color: palette.text.secondary,
            textAlign: 'center',
            fontFamily: 'Noto Sans',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '1.5rem' /* 142.857% */,
            letterSpacing: '0.15px',
            padding: '0.25rem 0.5rem',
            '&:hover': {
              backgroundColor: palette.button,
            },
          },
        },
      ],
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 'unset',
        },
      },
    },
  },
  ...palette,
});

export default theme;
