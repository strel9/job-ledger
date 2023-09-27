
import withDefaultColor from 'hoc/withDefaultColor'

function WatchIcon (props) {
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
        d='M22.531 14a8.523 8.523 0 00-3.558-6.925l-.696-3.848a1.532 1.532 0 00-1.508-1.258h-5.538a1.531 1.531 0 00-1.508 1.258l-.696 3.848a8.517 8.517 0 000 13.85l.696 3.848a1.53 1.53 0 001.508 1.258h5.538a1.53 1.53 0 001.508-1.258l.696-3.849A8.522 8.522 0 0022.531 14zM11.015 3.46a.219.219 0 01.219-.179h5.539a.218.218 0 01.218.18l.5 2.755a8.497 8.497 0 00-6.968 0l.492-2.755zm5.97 21.08a.22.22 0 01-.219.179h-5.535a.219.219 0 01-.22-.18l-.498-2.755a8.497 8.497 0 006.967 0l-.495 2.755zM14 21.218A7.219 7.219 0 1121.219 14 7.228 7.228 0 0114 21.219zM19.031 14a.656.656 0 01-.656.656H14a.656.656 0 01-.656-.656V9.625a.656.656 0 111.312 0v3.719h3.719a.656.656 0 01.656.656z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.lightBlue')(WatchIcon)