import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

// const breakpoints = createBreakpoints({
//   values: {
//     xs: 0,
//     sm: 420,
//     md: 768,
//     lg: 1024,
//     xl: 1366,
//     xxl: 1610
//   }
// })

// Create a theme instance.
const theme = createTheme({
  spacing: 10,

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },

  palette: {
    primary: {
      main: '#4780ED',
      black: '#242A35',
      darkGray: '#4D4F52',
      lightGray: '#FAFAFA',
      white: '#FFFFFF',
      bg: '#F7F7F7',
      // darkBlue: '#',
      blue: '#4780ED',
      lightBlue: '#49BDEC',
      ultraLightBlue: '#E5F1F9',
      purple: '#7967ED',
      // midPurple: '#'
      // #46C1EB
      // #7D5FEC
      text: '#242A35'
    },
    secondary: {
      main: '#F7F7F7',
      text: '#242A35'
      // second: '#7D5FEC'
    },
    error: {
      main: red.A400
    }
  },

  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontSize: '58px',
      fontWeight: '700',
      color: '#242A35'
    },
    h2: {
      fontSize: '32px',
      fontWeight: '700'
    },
    h3: {
      fontSize: '28px'
    },
    h4: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#242A35'
    },
    body1: {
      fontSize: '18px',
      color: '#4D4F52'
    },
    body2: {
      fontSize: '16px',
      color: '#242A35'
    },
    caption: {
      fontSize: '14px'
    }
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            textTransform: 'none',
            fontWeight: 600,
            // fontsize: ,
            // border: 40,
            // backgroundColor: red,
            // color: '#fff',
            borderRadius: 80,
            '&:hover': {
              // color: globalTheme.palette.primary.light,
              // backgroundColor: alpha(globalTheme.palette.primary.main, 0.16)
            },
            '&:active': {
              // backgroundColor: globalTheme.palette.primary.dark,
              // color: '#fff'
            }
          }
        },
        {
          props: { color: 'secondary' },
          style: {
            textTransform: 'none',
            fontWeight: 600,
            // fontsize: ,
            // border: 40,
            // backgroundColor: red,
            // color: '#fff',
            // borderRadius: 80,
            '&:hover': {
              // color: globalTheme.palette.primary.light,
              // backgroundColor: alpha(globalTheme.palette.primary.main, 0.16)
            },
            '&:active': {
              // backgroundColor: globalTheme.palette.primary.dark,
              // color: '#fff'
            }
          }
        }

      ]
    },

    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       '--TextField-brandBorderColor': '#E0E3E7',
    //       '--TextField-brandBorderHoverColor': '#B2BAC2',
    //       '--TextField-brandBorderFocusedColor': '#6F7E8C',
    //       '& label.Mui-focused': {
    //         color: 'var(--TextField-brandBorderFocusedColor)'
    //       }
    //     }
    //   }
    // },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          // transition: '10%',
          // backgroundColor: '#FFFFFF'
          // backgroundColor: 'red',
          // padding: '14px 10px'
          // borderColor: 'var(--TextField-brandBorderColor)'
        },
        root: {

          // backgroundColor: '#FFFFFF'

          // [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          //   borderColor: 'var(--TextField-brandBorderHoverColor)'
          // },
          // [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          //   borderColor: 'var(--TextField-brandBorderFocusedColor)'
          // }
        }
      }
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8
        },
        outlinedPrimary: {
          color: '#242A35'

          // '&:hover': {
          //   color: '#7D5FEC'
          // }
        },
        outlinedSecondary: {
          color: '#242A35',
          backgroundColor: '#4780ED',
          // backgroundColor: '#E5F1F9',
          borderColor: '#4780ED',

          '&:hover': {
            // color: '#7D5FEC',
            backgroundColor: '#E5F1F9'
          }
        },
        outlined: {
          // backgroundColor: '#E5F1F9'
        }

      }
      // variants: [
      //   {
      //     props: { color: 'primary' },
      //     style: {
      //       textTransform: 'none',
      //       color: '#242A35',
      //       borderRadius: 8,
      //       '&:hover': {
      //       },
      //       '&:active': {

      //       }
      //     }
      //   },
      //   {
      //     props: { color: 'secondary' },
      //     style: {
      //       textTransform: 'none',
      //       // fontWeight: 600,
      //       // fontsize: ,
      //       // border: 40,
      //       backgroundColor: '#E5F1F9',
      //       color: '#242A35',
      //       borderRadius: 8,
      //       borderColor: '#4780ED'
      //     }
      //   }
      // ]
      // styleOverrides: {
      // icon
      // }
    },

    // TextField: {
    //   styleOverrides: {
    //     root: {
    //       color: '#7D5FEC'
    //       // borderRadius: 8
    //     },

    //     MuiInputLabel: { // Name of the component ⚛️ / style sheet
    //       root: { // Name of the rule
    //         color: '#7D5FEC',

    //         '&$focused': { // increase the specificity for the pseudo class
    //           color: '#7D5FEC'
    //         }
    //       }
    //     }
    //     // outlinedPrimary: {
    //     //   color: '#242A35'

    //     //   // '&:hover': {
    //     //   //   color: '#7D5FEC'
    //     //   // }
    //     // },
    //     // outlinedSecondary: {
    //     //   color: '#242A35',
    //     //   backgroundColor: '#4780ED',
    //     //   // backgroundColor: '#E5F1F9',
    //     //   borderColor: '#4780ED',

    //     //   '&:hover': {
    //     //     // color: '#7D5FEC',
    //     //     backgroundColor: '#E5F1F9'
    //     //   }
    //     // },
    //     // outlined: {
    //     //   // backgroundColor: '#E5F1F9'
    //     // }

    //   }
    // },

    MuiSlider: {
      styleOverrides: {
        // valueLabel: ({ ownerState, theme }) => ({
        //   ...(ownerState.orientation === 'vertical' && {
        //     backgroundColor: 'transparent',
        //     color: theme.palette.grey[500]
        //   })
        // })
      }
    }
  }
})

export default theme
