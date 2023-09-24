import React from 'react'

import Link from 'components/Link'

export default function withLinkOnButton (opts) {
  return Component => props => {
    const { to, external, ...restProps } = props
    let ComponentProps = { ...restProps }

    if (external || restProps.href) {
      ComponentProps.rel = 'nofollow noopener noreferrer'
      ComponentProps.target = '_blank'
    }

    if (to) {
      ComponentProps = {
        ...restProps,
        component: React.forwardRef((props, ref) => (
          <Link {...props} ref={ref} />)
        ),
        to
      }
    }

    return <Component {...ComponentProps} />
  }
}
