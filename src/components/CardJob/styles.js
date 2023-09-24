export default ({ palette }) => {
  return {
    root: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,

      '&:hover': {
        backgroundColor: '#FAFAFA',
        cursor: 'pointer',
        opacity: 1,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        // boxShadow: 'box-shadow: 0px 0px 28px 3px #ABABAB26',
        // '& $title': {
        //   color: palette.colors.green.main
        // },
        '& $readMoreButton': {
          // transform: `translateY(${spacing(1.2)}px)`
        }
      },

      '& .MuiPaper-root': {
        // backgroundColor: '#00000'
      }
    },

    cardFooterText: {

    }

  }
}
