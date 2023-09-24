
export default ({ palette }) => {
  return {
    root: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      height: '100%',

      '&:hover': {
        backgroundColor: '#FAFAFA',
        cursor: 'pointer',
        opacity: 1,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',

        // '& $title': {
        //   color: palette.colors.green.main
        // },
        '& $readMoreButton': {
          // transform: `translateY(${spacing(1.2)}px)`
        }
      },

      '& .MuiCard-root': {
        // padding: '24px',
        // borderRadius: '40px'
      },

      '& .MuiCardMedia-root': {
        padding: '24px',
        borderRadius: '40px'
      },

      '& .MuiCardContent-root': {
        padding: '24px',
        paddingTop: '0'
      }
    },
    description: {

    }

  }
}
