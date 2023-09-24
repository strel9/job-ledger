
import withDefaultColor from 'hoc/withDefaultColor'

function EllipseIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='6'
      height='6'
      fill='none'
      viewBox='0 0 6 6'
      {...restProps}
    >
      <circle cx='3' cy='3' r='3' fill={color} />
    </svg>
  )
}

export default withDefaultColor('primary.lightBlue')(EllipseIcon)
