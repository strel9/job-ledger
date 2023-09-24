import MuiButton from '@mui/material/Button'

import withLinkOnButton from 'hoc/withLinkOnButton'

import useClasses from 'hooks/useClasses'

import styles from './styles'

// import ButtonBase from './Base'
// import ButtonFab from './Fab'
// import ButtonGroup from './Group'
// import ButtonIcon from './Icon'

function WrappedButton (props) {
  const { children, ...restProps } = props

  const classes = useClasses(styles)

  return (
    <MuiButton {...restProps}>
      <div className={classes.children}>
        {children}
      </div>
    </MuiButton>
  )
}

const Button = withLinkOnButton()(WrappedButton)

// Button.Base = ButtonBase
// Button.Fab = ButtonFab
// Button.Group = ButtonGroup
// Button.Icon = ButtonIcon

export default Button
