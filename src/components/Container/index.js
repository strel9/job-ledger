import React from 'react'
import PropTypes from 'prop-types'
import { cx } from '@emotion/css'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function Container (props) {
  const {
    className,
    component,
    maxWidth,
    minWidth,
    noYOffset,
    flex,
    ...restProps
  } = props

  const classes = useClasses(styles)
  const rootClassName = cx(
    classes.root,
    flex && classes.flex,
    noYOffset && classes.noYOffset,
    minWidth && classes.scrollX,
    className
  )

  const Props = {
    ...restProps,
    className: rootClassName,
    style: { minWidth, maxWidth }
  }

  return React.createElement(component, Props)
}

Container.propTypes = {
  component: PropTypes.node
}

Container.defaultProps = {
  component: 'div'
}

export default Container
