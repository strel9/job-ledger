
import withDefaultColor from 'hoc/withDefaultColor'

function RankIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='28'
      height='28'
      fill='none'
      viewBox='0 0 28 28'
      {...restProps}
    >
      <path
        fill={color}
        d='M20.087 11.17l-5.672-5.673-5.672 5.673L7 9.415 14.415 2l7.415 7.415-1.742 1.755zm0 7.415l-5.672-5.673-5.672 5.673L7 16.83l7.415-7.415 7.415 7.415-1.742 1.755zm0 7.415l-5.672-5.672L8.743 26 7 24.245l7.415-7.415 7.415 7.415L20.088 26z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.lightBlue')(RankIcon)
