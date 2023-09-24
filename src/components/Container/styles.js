export default ({ breakpoints }) => {
  return {
    root: {
      padding: 32,

      [breakpoints.down('sm')]: {
        padding: '32px 12px'
      },

      '& + &': {
        paddingTop: 0
      }
    },

    flex: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },

    scrollX: {
      overflowX: 'auto'
    },

    noYOffset: {
      padding: '0 32px'
    }
  }
}
