import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    bp1: '(min-width: 320px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1200px)',
  },
  theme: {
    colors: {
      /* -------------------------------------------------------------------------- */
      /*                                Global Colors                               */
      /* -------------------------------------------------------------------------- */
      blueReg500: 'hsla(208, 100%, 32%, 1)',
      blueReg600: 'hsl(208,100%,32%, 1)',
      blueAccent400Transparent: 'hsla(206, 100%, 51%, 1)',
      blueAccent500Transparent: 'hsla(203, 100%, 59%, 0.1)',
      blueMuted: 'hsla(206, 48%, 24%, 1)',

      /* -------------------------------------------------------------------------- */
      /*                                Alias Colors                                */
      /* -------------------------------------------------------------------------- */
      /* ----------------------------- Background/Main ---------------------------- */
      bgPrimary: 'hsla(0, 0%, 100%, 1)',
      bgSecondary: 'hsla(200, 28%, 96%, 1)',
      bgTertiary: 'hsla(200, 29%, 92%, 1)',
      bgSecondaryTransparent: 'hsla(205, 29%, 66%, 0.1)',
      /* --------------------------- Background/Status ---------------------------- */
      bgInformative: 'hsla(194, 100%, 92%, 1)',
      bdInformativeTransp: 'hsla(203, 100%, 59%, 0.2)',
      bgNegative: 'hsla(4, 100%, 93%, 1)',
      bgPositive: 'hsla(139, 90%, 90%, 1)',
      bgNotice: 'hsla(34, 100%, 87%, 1)	',
      bgSpecial: 'hsla(48, 100%, 86%, 1)',
      /* ------------------------------- Border/Main ------------------------------ */
      bdPrimary: 'hsla(206, 48%, 24%, 0.1)',
      bdSecondary: 'hsla(203, 26%, 86%, 1)',
      bdTertiary: 'hsla(204, 30%, 76%, 1)',
      /* ------------------------------- Border/Status ---------------------------- */
      bdInformative: 'hsla(196, 100%, 82%, 1)',
      bdNegative: 'hsla(2, 100%, 88%, 1)',
      bdPositive: 'hsla(141, 84%, 81%, 1)',
      bdNotice: 'hsla(32, 100%, 79%, 1)',
      bdSpecial: 'hsla(32, 100%, 79%, 1)',
      /* -------------------------------- Text/Main ------------------------------- */
      txtPrimary: 'hsla(206, 48%, 24%, 1)',
      txtSecondary: 'hsla(206, 32%, 39%, 1)',
      txtTertiary: 'hsla(205, 22%, 53%, 1)',
      txtQuaternary: 'hsla(205, 29%, 66%, 1)',
      txtOverBg: 'hsla(0, 0%, 100%, 1)',
      /* ------------------------------- Text/Status ------------------------------ */
      txtLink: 'hsla(207, 98%, 40%, 1)',
      txtInformative: 'hsla(206, 48%, 24%, 1)',
      txtNegative: 'hsla(349, 21%, 21%, 1)',
      txtPositive: 'hsla(162, 25%, 20%, 1)',
      txtNotice: 'hsla(28, 25%, 19%, 1)',
      txtSpecial: 'hsla(37, 26%, 20%, 1)',
      /* --------------------------------- Shadow --------------------------------- */
      shLight: 'hsla(206, 48%, 24%, 0.1)',
      shBold: 'hsla(206, 48%, 24%, 0.2)',
      shHeavy: 'hsla(206, 48%, 24%, 0.5)',
      iconPrimary: 'hsla(205, 25%, 53%, 1)'
    },
    space: {
      /* -------------------------------------------------------------------------- */
      /*                                 Space Scale                                */
      /* -------------------------------------------------------------------------- */
      base: '8px', //Base = 8px
      /* ------------------------ Space Scale/Interpolation ------------------------ */
      xdot25: 'calc($base * 0.25)',
      xdot5: 'calc($base * 0.5)',
      x1dot5: 'calc($base * 1.5)',
      x2: 'calc($base * 2)',
      x2dot5: 'calc($base * 2.5)',
      x3: 'calc($base * 3)',
      x6: 'calc($base * 6)',
      x8: 'calc($base * 8)',
      x10: 'calc($base * 10)',
    },
    fontSizes: {
      /* -------------------------------------------------------------------------- */
      /*                                 Type Scale                                 */
      /* -------------------------------------------------------------------------- */
      base: '16px', //Base = 16px
      /* ------------------------ Type Scale/Interpolation ------------------------ */
      xxs: 'calc($base * 0.5625)',
      xs: 'calc($base * 0.625)',
      sm: 'calc($base * 0.75)',
      md: 'calc($base * 0.875)',
      lg: 'calc($base * 1)',
      xl: 'calc($base * 1.125)',
      xxl: 'calc($base * 4)',
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      round: '50%',
      pill: '100vw',
    },
    shadows: {
      sm: '0px 1px 1px hsla(206, 48%, 24%, 0.1), 0px 2px 4px hsla(206, 48%, 24%, 0.1)',
      md: '0px 1px 4px hsla(206, 48%, 24%, 0.1), 0px 6px 12px hsla(206, 48%, 24%, 0.1)',
    }
  },
  media: {
    bp1: '(min-width: 200px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    /* ---------------------------- Shorthand/Margin ---------------------------- */
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    /* ---------------------------- Shorthand/Padding --------------------------- */
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    bdr: (value) => ({
      borderRadius: value
    })
  }
})

export const darkTheme = createTheme('Label', {


})
const injectGlobalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'codec',
      src: 'local(""), url("fonts/codec-pro-regular.woff2")',
    },
    {
      fontFamily: 'codec-bold',
      src: 'local(""), url("/fonts/codec-pro-bold.woff2")',
    }
  ],
  "*": {
    fontFamily: "codec",
    fontWeight: '400',
    margin: '0',
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  "*:after": { boxSizing: "border-box" },
  "*:before": { boxSizing: "border-box" },
  'button': { border: 'none', cursor: 'pointer', opacity: '1', transition: 'opacity 0.3s ease-out' },
  'button:hover': { opacity: '0.9', boxShadow: '$md', transition: 'all 0.1s ease-in' },
  'button:active': { opacity: '0.7', boxShadow: '$sm', transition: 'all 0.1s linear' }
})

injectGlobalStyles()

