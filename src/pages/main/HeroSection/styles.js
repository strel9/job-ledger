export default ({ breakpoints, palette }) => {
  return {
    root: {

    },
    title: {
      [breakpoints.down('sm')]: {
        fontSize: '32px'
      }

      // '&--nth-word(3)': {
      //   color: '#4780ED'
      // }

    },
    btn: {
      minWidth: '428px',
      color: '#FAFAFA',
      // fontSize: '18px',
      // color: `linear-gradient(to bottom, ${palette.lightBlue} 29%, ${palette.purple} 81%)`,
      backgroundImage: 'linear-gradient(to right, #46C1EB 29%, #7967ED 81%)',
      // transition: 'background-color 2s ease-out 100ms',
      // transition: '0.3s',
      // border: [['100px', 'solid', '#4780ED']],
      // border: 'none'
      // borderRadius: '100px'
      // borderWidth: '4px',
      // borderStyle: 'solid'
      // borderImage: 'linear-gradient(to right, #46C1EB, #7D5FEC) 1'
      // background:
      // `
      // linear-gradient(${'white'}, ${'white'}) padding-box,
      // linear-gradient(${'to right'}, ${'#46C1EB'}, ${'#7967ED'}) border-box
      // `,
      // // borderRadius: '80px',
      // border: [['104px', 'solid', 'transparent']]

      [breakpoints.down('sm')]: {
        minWidth: '140px'
      },

      '&:hover': {
        backgroundImage: 'linear-gradient(to right, #46C1EB 0%, #7967ED 91%)'
      }
    }

    // logo: {
    //   position: 'absolute',
    //   top: '20%',
    //   right: '10%'
    // }
  }
}
