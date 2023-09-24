
import withDefaultColor from 'hoc/withDefaultColor'

function LensIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...restProps}
    >
      <path
        fill={color}
        d='M21.53 20.47l-4.693-4.694a8.26 8.26 0 10-1.06 1.06l4.693 4.695a.75.75 0 101.06-1.062zM3.75 10.5a6.75 6.75 0 116.75 6.75 6.758 6.758 0 01-6.75-6.75z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.darkGray')(LensIcon)
