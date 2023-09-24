export default ({ palette }) => {
  return {
    root: {
      background: 'linear-gradient(90deg, rgba(70,193,235,1) 0%, rgba(125,95,236,1) 70%);'
      // `
      // linear-gradient(${'white'}, ${'white'}) padding-box,
      // linear-gradient(${'to right'}, ${'#46C1EB'}, ${'#7967ED'}) border-box
      // `,
    },
    container: {
    },
    title: {

    },
    formContainer: {

      '& > *:not(last-child)': {
        marginBottom: '16px'
      }
    },

    btn: {

    },

    input: {
      opacity: '50%',

      '&:MuiFilledInput': {

      }
    }

  }
}
